/** One stage of the home page's "What you're looking at" explainer. */
export interface Stage {
  label: string;
  text: string;
}

export const stages: Stage[] = [
  { label: "Crawl", text: "Documents arrive, update in place, and retire" },
  { label: "Extract", text: "Raw pages and PDFs become clean text" },
  { label: "Represent", text: "Documents become vectors and similar content clusters together" },
  { label: "Index", text: "Points link to nearest neighbors and redundant links are pruned" },
  { label: "Retrieve", text: "Queries route greedily and nearest results return one by one" },
];
