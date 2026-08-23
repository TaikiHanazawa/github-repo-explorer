export type Repository = {
  description: string | null;
  html_url: string;
  id: number;
  language: string | null;
  name: string;
  stargazers_count: number;
};

export type GitHubSearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
};