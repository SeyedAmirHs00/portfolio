export interface Publication {
  title: string;
  authors: string;
  year?: string;
  venue?: string;
  status?: "Published" | "Preprint" | "In review" | "Proposed";
  url?: string;
  notes?: string;
}

export const publications: Publication[] = [];
