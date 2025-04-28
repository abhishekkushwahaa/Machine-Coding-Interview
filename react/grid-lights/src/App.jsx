import { useState } from "react"

const config = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 1, 1]
]

function App() {

  const [grid, setGrid] = useState(new Map())

  const handleClick = (rowIndex, colIndex) => {
    return () => {
      const newGrid = structuredClone(grid)
      const key = `${rowIndex} - ${colIndex}`

      if (newGrid.get(key) || !config[rowIndex][colIndex]) {
        return
      } else {
        newGrid.set(key, true)
      }

      setGrid(newGrid)

      const lightSelected = config.flat().reduce((a, b) => { return a + b }, 0)
      if (lightSelected === newGrid.size) {
        startRollBack()
      }
    }
  }

  const startRollBack = () => {
    const intervalId = setInterval(() => {
      setGrid(function(prevStack) {
        const lastKey = Array.from(prevStack.keys()).pop();
        const newGrid = structuredClone(prevStack);
        newGrid.delete(lastKey)

        if (!newGrid.size) {
          clearInterval(intervalId)
        }

        return newGrid;
      })
    }, 1000)
  }

  return (
    <div className="grid-light">
      {config.map((row, rowIndex) => {
        return <div className="grid-row" key={rowIndex}>
          {row.map((col, colIndex) => {

            let lightClass = ""
            if (col === 0) {
              lightClass = "off"
            }

            const key = `${rowIndex} - ${colIndex}`
            if (grid.has(key)) {
              lightClass = "on"
            }

            return <div onClick={handleClick(rowIndex, colIndex)} className={`grid-col ${lightClass}`} key={colIndex}></div>
          })}
        </div>
      })}
    </div>
  )
}

export default App
