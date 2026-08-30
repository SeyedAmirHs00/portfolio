export interface Article {
  title: string;
  authors: string;
  year?: string;
  venue?: string;
  url?: string;
  notes?: string;
}

export interface Book {
  title: string;
  authors: string;
  year?: string;
  url?: string;
  notes?: string;
}

export interface Course {
  title: string;
  provider: string;
  instructor?: string;
  year?: string;
  status: "Passed" | "Watched";
  url?: string;
  notes?: string;
}

export const articles: Article[] = [];

export const books: Book[] = [];

export const courses: Course[] = [];
