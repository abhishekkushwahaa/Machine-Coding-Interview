import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      // Logic to add chips/tags
      setChips(prev => [...prev, inputText])
      setInputText("");
    }
  }

  const handleDeleteTags = (index) => {
    // Remove value on index from tags/chips array
    const copyChips = [...chips]
    copyChips.splice(index, 1)
    setChips(copyChips);
  }

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
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
      <div className="chips-input">
        {chips.map((chip, index) =>
          <div
            key={index}
            className="tags">
            {chip}
            <button
              className="x"
              onClick={() => handleDeleteTags(index)}
            >❌</button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
