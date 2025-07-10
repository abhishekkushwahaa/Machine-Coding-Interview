import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])

  const addTodoItem = () => {
    const item = {
      id: 0,
      text: input,
      completed: false
    }
    setTodoList(prev => [...prev, item])
  }

  return (
    <>
      <div className="todo-container">
        <h2>Todo-List</h2>
      </div>
      <div className="list-container">
        <input className="todo-input" type="text" placeholder="Enter Todo"
          value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addTodoItem()}>Add</button>
      </div>
      <div className="todo-container">
        <ul>
          {todoList.map(t => <li key={t.id}>
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
