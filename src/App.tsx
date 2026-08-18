import { useState } from "react";

type Repository = {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
};

const mockRepositories: Repository[] = [
  {
    id: 1,
    name: "react",
    description: "A JavaScript library for building user interfaces",
    language: "JavaScript",
    stars: 180000,
  },
  {
    id: 2,
    name: "go",
    description: "The Go programming language",
    language: "Go",
    stars: 80000,
  },
  {
    id: 3,
    name: "serverless",
    description: "The serverless framework",
    language: "JavaScript",
    stars: 50000,
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  return (
    <main>
      <h1>RepoScout</h1>
      <p>Explore GitHub Repositories</p>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const trimmedQuery = query.trim();

          if (!trimmedQuery) {
            return;
          }

          setSubmittedQuery(trimmedQuery);
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
      <ul>
        {mockRepositories.map((repository) => (
          <li key={repository.id}>
            <p>{repository.name}</p>
            <p>{repository.description}</p>
            <p>Language: {repository.language}</p>
            <p>Stars: {repository.stars}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
