export interface Publication {
  title: string;
  authors: string;
  year?: string;
  venue?: string;
  status?: "Published" | "Preprint" | "In review" | "Proposed";
  url?: string;
  notes?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Trust, Don't Trust, or Flip: Robust Preference-Based Reinforcement Learning with Multi-Expert Feedback",
    authors:
      "Seyed Amir Hosseini, Maryam Abdolali, Amirhosein Tavakkoli, Fardin Ayar, Ehsan Javanmardi, Manabu Tsukada, Mahdi Javanmardi",
    year: "2026",
    venue: "arXiv",
    status: "Preprint",
    url: "https://arxiv.org/abs/2601.18751",
  },
];
