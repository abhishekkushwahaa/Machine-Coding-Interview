import { useState } from "react"
import json from "./data.json"

// Render List of Objects
const List = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState({})
  return (<div className="container">
    {list.map((node) => (
      <div key={node.id}>
        {node.isFolder && <span onClick={() => setIsExpanded((prev) => ({ ...prev, [node.name]: !prev[node.name] }))}>{isExpanded?.[node.name] ? "- " : "+ "}</span>}
        <span>{node.name}</span>
        {isExpanded?.[node.name] && node?.children && <List list={node.children} />}
      </div>

    ))}
  </div>)
}

function App() {
  const [data, setData] = useState(json)
  return (
    <div className="file-explorer">
      <h1>File/Folder Explorer</h1>
      <List list={data} />
    </div>
  )
}

export default App
