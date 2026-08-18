import { useState } from "react"


function App() {
  const [query, setQuery] = useState("")

  return (
    <main>
      <h1>RepoScout</h1>
      <p>Explore GitHub Repositories</p>

      <form>
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
    </main>
  )
}

export default App