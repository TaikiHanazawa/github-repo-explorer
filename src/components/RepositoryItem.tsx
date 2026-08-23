import type { Repository } from "../types/repository";

type RepositoryItemProps = {
  repository: Repository;
};

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <p>
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          {repository.name}
        </a>
      </p>
      <p>{repository.description ?? "No description"}</p>
      <p>Language: {repository.language ?? "Not specified"}</p>
      <p>Stars: {repository.stargazers_count}</p>
    </li>
  );
}
