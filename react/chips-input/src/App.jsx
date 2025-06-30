import { useState } from "react"

function App() {

  const [inputText, setInputText] = useState("")

  return (
    <>
      <div className="chips-container">
        <h2>Chips Input</h2>
      </div>
      <div className="chips-input">
        <input
          className="input-tag"
          type="text"
          placeholder="Type tags and chips"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="chips-input">
        <span className="tags">{inputText}</span>
      </div>
    </>
  )
}

export default App
