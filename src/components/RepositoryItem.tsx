import type { Repository } from "../types/repository";

type RepositoryItemProps = {
  repository: Repository;
};

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <p>{repository.name}</p>
      <p>{repository.description}</p>
      <p>Language: {repository.language}</p>
      <p>Stars: {repository.stars}</p>
    </li>
  );
}
