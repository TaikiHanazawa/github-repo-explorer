function App() {
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
        />
        <button type="submit">Search</button>
      </form>
    </main>
  )
}

export default App