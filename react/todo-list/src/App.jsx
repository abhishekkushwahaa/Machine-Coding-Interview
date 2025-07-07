import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  return (
    <>
      <div className="todo-container">
        <h2>Todo-List</h2>
      </div>
      <div className="list-container">
        <input className="todo-input" type="text" placeholder="Enter Todo"
          value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Add</button>
      </div>
    </>
  )
}

export default App
