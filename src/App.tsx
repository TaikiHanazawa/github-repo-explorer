import { useState } from "react";

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
    </main>
  );
}

export default App;
