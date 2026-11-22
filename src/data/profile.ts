export const profile = {
  name: "Hunter Schuler",
  headline: "Founding Engineer at Seltz · Knowledge systems for AI search",
  location: "Los Angeles",
  companyUrl: "https://seltz.ai",
  summary:
    "Engineer building search for AI agents at Seltz. This site is where I write about information retrieval, knowledge processing and anything else I find interesting.",
  about: [
    "I'm a founding engineer at Seltz, where we build search for AI agents. I own the architecture of our knowledge processing platform, the systems that crawl the web and turn raw pages and documents into representations that indexing and retrieval can use.",
    "I've worked across the whole stack. At Seltz that includes knowledge extraction from web pages and PDFs, how content is represented from crawl through retrieval, and a columnar storage layer that lets documents update in place without reprocessing the corpus. It also extends into model deployment and retrieval, where I work through architectural tradeoffs with customers. At Amazon I built crawling and NLP extraction pipelines for Alexa Local Information, then owned the deployment and ML experimentation infrastructure behind Alexa's web retrieval services.",
    "I have an MS in Computer Science from Georgia Tech, focused on machine learning, and a BS in Computer Science and Physics from Penn State. I'm always glad to talk about information retrieval, knowledge systems and applied ML.",
  ],
  experience: [
    {
      company: "Seltz",
      role: "Founding Engineer",
      dates: "Nov 2025 – Present",
      location: "Remote",
      highlights: [
        "Own the architecture and implementation of Seltz's knowledge processing platform, which acquires, transforms and represents content for search",
        "Designed the distributed processing and storage systems underneath it. The columnar storage layer updates documents in place instead of reprocessing the corpus",
        "Led the work on knowledge extraction from PDFs and on how content is represented from crawl through retrieval",
        "Built an A/B testing integration that cut model deployment from a week to a day",
        "Work with customers on system capabilities and architectural tradeoffs",
      ],
    },
    {
      company: "Amazon",
      role: "Software Engineer II, AGI",
      dates: "Oct 2023 – Nov 2025",
      location: "Los Angeles, CA",
      highlights: [
        "Owned deployment infrastructure for Alexa's core web retrieval services. Raised deployment success to 95%, a director-level goal, and cut deployment time by more than half",
        "Built blue-green deployments with automated rollback, so releases no longer caused downtime",
        "Designed CI/CD for model deployment and validation, which sped up feature and experiment delivery by 75%",
        "Helped partner teams launch new search features through the deployment system",
      ],
    },
    {
      company: "Amazon",
      role: "Software Engineer, Alexa Local Information",
      dates: "Jul 2022 – Oct 2023",
      location: "Sunnyvale, CA",
      highlights: [
        "Designed and built a crawling and NLP extraction framework that pulls structured information from unstructured pages. It raised global data quality by 26 basis points and saved about 8 engineering hours a week",
        "Built ML-based domain scoring to make domain matching more reliable",
        "Led the team that built a new ETL framework, which cut infrastructure costs by 1.5% and the effort to onboard a data provider by 62.5%",
        "Tracked down a recurring data issue with other teams and cut the defect rate by 20 basis points",
      ],
    },
    {
      company: "Penn State University",
      role: "Research Assistant (LIGO)",
      dates: "Dec 2018 – May 2022",
      location: "State College, PA",
      highlights: [
        "Helped build and deploy real-time analytics software for gravitational-wave analysis",
        "Built a website where LIGO collaborators and astronomers share data and tools, with live alerts for new detections",
      ],
    },
  ],
  earlierExperience: [
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      summary: "Built an Apache Spark framework on AWS EMR to check data-labeling results against existing datasets",
    },
    {
      role: "Software Engineer Intern",
      company: "Boeing",
      summary:
        "Built kernel-call emulation for the INTEGRITY RTOS so packages could build without target hardware, and test tooling for B-52 radar-modernization simulation software",
    },
    {
      role: "Software Engineer Intern",
      company: "Johns Hopkins APL",
      summary:
        "Built analytics features and APIs for ESSENCE, the bio-surveillance platform used by the CDC and regional hospitals",
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "MS, Computer Science",
      description:
        "Focus on Machine Learning and Interactive Intelligence. Coursework in machine learning and deep learning, including recurrent and recursive networks. Built neural networks from scratch and in PyTorch.",
    },
    {
      school: "Penn State University",
      degree: "BS, Computer Science and Physics",
      description:
        "Minors in Mathematics, Cybersecurity and Engineering Leadership Development. Lockheed Martin Scholar through the Engineering Leadership Development program.",
    },
  ],
  contact: [
    { label: "Email", href: "mailto:schuler.hunter.l@gmail.com", text: "schuler.hunter.l@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hunter-schuler/", text: "linkedin.com/in/hunter-schuler" },
    { label: "GitHub", href: "https://github.com/SchulerHunter", text: "github.com/SchulerHunter" },
  ],
};
