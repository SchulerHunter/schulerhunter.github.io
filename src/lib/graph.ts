// Layout tunables for the hero knowledge graph, shared by the static fallback and the canvas.
/** Seed for the static no-JS frame; the canvas uses fresh randomness on every visit. */
export const SEED = 7;
export const NODES = 140;
/** Node count on narrow screens; the first nodes are kept, so every cluster stays represented. */
export const NODES_SMALL = 90;
export const CLUSTERS = 5;
export const CLUSTER_SPREAD = 0.16;
/** Neighbours a node links to when inserted (HNSW's M). */
export const M = 3;
/** Most links a node keeps; past this it prunes (HNSW's M_max). */
export const M_MAX = 6;
/** Below 1, the neighbour heuristic drops more long edges, so fewer bridges survive between clusters. */
export const PRUNE_ALPHA = 0.85;
/** Minimum links between clusters; repair adds the shortest missing ones. */
export const BRIDGES = 6;
/** Graph radius as a fraction of the canvas height and width; the smaller result wins. */
export const SCALE_H = 0.55;
export const SCALE_W = 0.38;
export const CAMERA_DISTANCE = 3.2;
export const START_YAW = 0.5;
export const START_PITCH = 0.32;
/** Amplitude of the camera's pitch sway. */
export const TILT = 0.06;
/** Node radius in CSS pixels at unit size and depth. */
export const NODE_PX = 1.9;
/** Searcher position in the static no-JS frame, in graph-radius units from the centre, beside the text and in the band layout. */
export const SEARCHER_SIDE = { x: -0.55, y: -0.8 };
export const SEARCHER_BAND = { x: -1.3, y: -0.6 };
/** Boxes, in graph-radius units, that searchers may appear in: clear of the text column, or inside the band. */
export const SPOT_BOX_SIDE = { x0: -0.6, x1: 1.25, y0: -0.8, y1: 0.8 };
export const SPOT_BOX_BAND = { x0: -1.35, x1: 1.35, y0: -0.65, y1: 0.65 };
/** Minimum distance, in graph-radius units, between a searcher spot and any node at any rotation. */
export const SPOT_CLEARANCE = 0.2;
/** Searcher dot and ring radii in CSS pixels. */
export const SEARCHER_PX = 2.8;
export const SEARCHER_RING_PX = 6.5;
export const NODE_ALPHA = 0.75;
export const EDGE_ALPHA = 0.32;
/** Opacity steps edges are batched into when drawn. */
export const ALPHA_LEVELS = 6;

export interface Point {
  x: number;
  y: number;
  z: number;
}

export interface GraphNode extends Point {
  cluster: number;
  size: number;
  phase: number;
}

export interface GraphEdge {
  a: number;
  b: number;
}

/** Link operations the insertion and repair rules act through. */
export interface Net<N> {
  /** Current neighbours of `n`. */
  links(n: N): N[];
  link(a: N, b: N): void;
  /** `pruner` drops its link to `dropped`. */
  unlink(pruner: N, dropped: N): void;
}

export interface Graph {
  nodes: GraphNode[];
  edges: GraphEdge[];
  centres: Point[];
}

export interface Spot {
  x: number;
  y: number;
}

/** Seeded uniform random numbers in [0, 1). */
export function random(seed: number): () => number {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const distance = (p: Point, q: Point) => Math.hypot(p.x - q.x, p.y - q.y, p.z - q.z);
const nearestFirst = (base: Point) => (p: Point, q: Point) => distance(p, base) - distance(q, base);

/** HNSW neighbour selection: keep a candidate only if it is nearer `base` than any kept one, then top up with the nearest. */
function select<N extends Point>(base: N, candidates: N[], m: number): N[] {
  const kept: N[] = [];
  for (const c of candidates) if (kept.length < m && kept.every((k) => distance(c, base) < PRUNE_ALPHA * distance(c, k))) kept.push(c);
  for (const c of candidates) if (kept.length < m && !kept.includes(c)) kept.push(c);
  return kept;
}

/** Inserts `node` HNSW-style: links it to M selected neighbours among `present`, then any neighbour over M_MAX prunes. */
export function insert<N extends Point>(node: N, present: N[], net: Net<N>): void {
  for (const n of select(node, present.filter((p) => p !== node).sort(nearestFirst(node)), M)) net.link(node, n);
  for (const n of net.links(node)) {
    const around = net.links(n).sort(nearestFirst(n));
    if (around.length <= M_MAX) continue;
    const keep = select(n, around, M_MAX);
    for (const x of around) if (!keep.includes(x) && net.links(x).length > 1) net.unlink(n, x);
  }
}

/** Joins disconnected parts by their closest pair, then adds the shortest links between unbridged clusters up to BRIDGES. */
export function repair<N extends GraphNode>(nodes: N[], net: Net<N>): void {
  const closest = (from: N[], to: N[]) => {
    let best: [N, N] | null = null;
    for (const a of from) for (const b of to) if (!best || distance(a, b) < distance(...best)) best = [a, b];
    return best;
  };
  for (;;) {
    const reached = new Set(nodes.slice(0, 1));
    for (const queue = [...reached]; queue.length; ) for (const m of net.links(queue.pop()!)) if (!reached.has(m) && reached.add(m)) queue.push(m);
    const pair = closest([...reached], nodes.filter((n) => !reached.has(n)));
    if (!pair) break;
    net.link(...pair);
  }
  const key = (a: N, b: N) => Math.min(a.cluster, b.cluster) * CLUSTERS + Math.max(a.cluster, b.cluster);
  const bridged = new Set<number>();
  let count = 0;
  for (const a of nodes) for (const b of net.links(a)) if (a.cluster < b.cluster && bridged.add(key(a, b))) count++;
  while (count < BRIDGES) {
    let best: [N, N] | null = null;
    for (const a of nodes) {
      for (const b of nodes) {
        if (a.cluster < b.cluster && !bridged.has(key(a, b)) && (!best || distance(a, b) < distance(...best))) best = [a, b];
      }
    }
    if (!best) break;
    net.link(...best);
    bridged.add(key(...best));
    count++;
  }
}

/** Builds the graph by inserting clustered nodes one by one in random order; seeded unless given `rand`. */
export function buildGraph(rand: () => number = random(SEED)): Graph {
  const gauss = () => Math.sqrt(-2 * Math.log(1 - rand())) * Math.cos(2 * Math.PI * rand());

  const centres: Point[] = Array.from({ length: CLUSTERS }, (_, i) => {
    const angle = (i / CLUSTERS) * Math.PI * 2 + rand() * 0.6;
    const radius = 0.7 + rand() * 0.25;
    return { x: Math.cos(angle) * radius, y: (rand() - 0.5) * 0.5, z: Math.sin(angle) * radius };
  });

  const nodes: GraphNode[] = Array.from({ length: NODES }, (_, i) => {
    const cluster = i % CLUSTERS;
    const c = centres[cluster];
    return {
      cluster,
      x: c.x + gauss() * CLUSTER_SPREAD,
      y: c.y + gauss() * CLUSTER_SPREAD * 0.8,
      z: c.z + gauss() * CLUSTER_SPREAD,
      size: i < CLUSTERS ? 1.7 : 0.7 + rand() * 0.6,
      phase: rand() * Math.PI * 2,
    };
  });

  const adjacency = new Map(nodes.map((n) => [n, new Set<GraphNode>()]));
  const net: Net<GraphNode> = {
    links: (n) => [...adjacency.get(n)!],
    link: (a, b) => {
      adjacency.get(a)!.add(b);
      adjacency.get(b)!.add(a);
    },
    unlink: (a, b) => {
      adjacency.get(a)!.delete(b);
      adjacency.get(b)!.delete(a);
    },
  };
  const present: GraphNode[] = [];
  for (const node of [...nodes].sort(() => rand() - 0.5)) {
    insert(node, present, net);
    present.push(node);
  }
  repair(nodes, net);

  const index = new Map(nodes.map((n, i) => [n, i]));
  const edges: GraphEdge[] = [];
  nodes.forEach((n, a) => net.links(n).forEach((m) => a < index.get(m)! && edges.push({ a, b: index.get(m)! })));
  return { nodes, edges, centres };
}

/** Grid points inside `box` that every node clears by `clearance` across a full rotation and the camera's sway. */
export function openSpots(
  nodes: Point[],
  box: { x0: number; x1: number; y0: number; y1: number },
  clearance = SPOT_CLEARANCE,
): Spot[] {
  const seen: Spot[] = [];
  for (let yaw = 0; yaw < Math.PI * 2; yaw += 0.08) {
    for (const pitch of [START_PITCH - TILT, START_PITCH, START_PITCH + TILT]) {
      for (const node of nodes) seen.push(project(node, yaw, pitch));
    }
  }
  const spots: Spot[] = [];
  for (let x = box.x0; x <= box.x1 + 1e-9; x += 0.1) {
    for (let y = box.y0; y <= box.y1 + 1e-9; y += 0.1) {
      if (seen.every((p) => Math.hypot(p.x - x, p.y - y) >= clearance)) spots.push({ x: +x.toFixed(2), y: +y.toFixed(2) });
    }
  }
  return spots;
}

/** Projects a point to screen space in graph-radius units; `depth` is the perspective scale, larger when nearer. */
export function project(p: Point, yaw: number, pitch: number): { x: number; y: number; depth: number } {
  const x = p.x * Math.cos(yaw) + p.z * Math.sin(yaw);
  const z1 = -p.x * Math.sin(yaw) + p.z * Math.cos(yaw);
  const y = p.y * Math.cos(pitch) - z1 * Math.sin(pitch);
  const z = p.y * Math.sin(pitch) + z1 * Math.cos(pitch);
  const depth = CAMERA_DISTANCE / (CAMERA_DISTANCE + z);
  return { x: x * depth, y: y * depth, depth };
}

/** Opacity factor for a projected depth: far nodes and edges recede. */
export function fade(depth: number): number {
  return Math.min(1, Math.max(0.15, (depth - 0.72) * 1.6));
}
