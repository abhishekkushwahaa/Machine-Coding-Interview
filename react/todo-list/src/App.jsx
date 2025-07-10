import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "React",
      completed: true
    }
  ])
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
      <div className="todo-container">
        <ul>
          {todoList.map(t => <li>
            <input type="checkbox" />
            <span>{t.text}</span>
            <button>Remove</button>
          </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
