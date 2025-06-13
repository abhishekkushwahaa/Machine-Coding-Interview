import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [cache, setCache] = useState({})

  const fetchData = async () => {
    if (cache[input]) {
      console.log("Cache Hit - ", input)
      setResults(cache[input])
      return;
    }

    console.log("API Call - ", input)
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json()
    setResults(json?.recipes)
    setCache(prev => ({ ...prev, [input]: json?.recipes }))
  }

  useEffect(() => {
    // Debouncing - It ensures that a function runs only after a certain delay has passed since the last time it was triggered.
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer)
    }
  }, [input])

  return (
    <div className="app">
      <h1>Auto-Complete Search Bar</h1>
      <div>
        <input type="text" className="inputBox" value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        ></input>
      </div>
      {showResults && <div className="results-container">
        {results.map((r) => (<span className="results" key={r.id}>{r.name}</span>))}
      </div>}
    </div>
  )
}

export default App
