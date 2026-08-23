import { useState } from "react";
import type { GitHubSearchResponse, Repository } from "./types/repository";
import { RepositoryItem } from "./components/RepositoryItem";

function App() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  return (
    <main>
      <h1>RepoScout</h1>
      <p>Explore GitHub Repositories</p>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const trimmedQuery = query.trim();

          if (!trimmedQuery) {
            return;
          }

          setSubmittedQuery(trimmedQuery);

          const encodedQuery = encodeURIComponent(trimmedQuery);

          const response = await fetch(
            `https://api.github.com/search/repositories?q=${encodedQuery}&per_page=10`,
          );

          const data: GitHubSearchResponse = await response.json();

          setRepositories(data.items);
        }}
      >
        <label htmlFor="query">Search repositories</label>
        <input
          id="query"
          type="search"
          placeholder="react, go, serverless"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <p>Current query: {query}</p>
      <p>Submitted query: {submittedQuery}</p>

      {submittedQuery !== "" &&
        (repositories.length === 0 ? (
          <p>No repositories found.</p>
        ) : (
          <ul>
            {repositories.map((repository) => (
              <RepositoryItem key={repository.id} repository={repository} />
            ))}
          </ul>
        ))}
    </main>
  );
}

export default App;
