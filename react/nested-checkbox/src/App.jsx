import { useState } from "react"

const checkBoxData = [
  {
    id: 1,
    name: "Fruites",
    children: [
      {
        id: 2,
        name: "Summer",
        children: [
          {
            id: 3,
            name: "Orange"
          },
          {
            id: 4,
            name: "Mango"
          }
        ]
      },
      {
        id: 5,
        name: "Winter",
        children: [
          {
            id: 6,
            name: "Blackbarries"
          },
          {
            id: 7,
            name: "Strawbarries"
          }
        ]
      },
      {
        id: 8,
        name: "Others",
        children: [
          {
            id: 9,
            name: "Apple"
          },
          {
            id: 10,
            name: "Guava"
          }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Flowers",
    children: [
      {
        id: 12,
        name: "Rose"
      }
    ]
  }
]

const CheckBoxes = ({ data, checked, setChecked }) => {

  const handleChange = (isChecked, node) => {
    setChecked(prev => {
      const newState = { ...prev, [node.id]: isChecked }

      // If Children are present and their parent checked then children must be checked!!
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child)
        })
      }
      updateChildren(node)

      // If all children are checked, mark the parent as checked
      const verifyChecked = (node) => {
        if (!node.children) {
          return newState[node.id] || false
        }
        const allChildrenChecked = node.children.every(
          (child) => verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      }
      checkBoxData.forEach(node => verifyChecked(node))

      return newState;
    })
  }

  return <div>
    {data.map((node) => (
      <div className="parent" key={node.id}>
        <input className="checkbox" type="checkbox"
          checked={checked[node.id] || false}
          onChange={(e) => handleChange(e.target.checked, node)}
        />
        <span>{node.name}</span>
        {node.children && <CheckBoxes data={node.children} checked={checked} setChecked={setChecked} />}
      </div>
    ))}
  </div>
}

function App() {
  const [checked, setChecked] = useState({})
  return (
    <>
      <div className="container">
        <h2>
          Nested Checkboxes
        </h2>
      </div>
      <div className="checkbox-container">
        <CheckBoxes data={checkBoxData} checked={checked} setChecked={setChecked} />
      </div>
    </>
  )
}

export default App
