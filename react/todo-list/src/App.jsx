import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])

  const addTodoItem = () => {

    if (input.trim() === "") return

    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false
    }
    setTodoList(prev => [...prev, item])
    setInput("")
  }

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map(t => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed
          }
        } else {
          return t
        }
      })
    )
  }

  const removeTodo = (id) => {
    setTodoList(
      todoList.filter(
        (t) => (t.id !== id)
      )
    )
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
            <input type="checkbox" checked={t.completed} onChange={() => toggleCompleted(t.id)} />
            <span className={t.completed ? "strikeThrough" : ""}>{t.text}</span>
            <button onClick={() => removeTodo(t.id)}>Remove</button>
          </li>)}
        </ul>
      </div >
    </>
  )
}

export default App
