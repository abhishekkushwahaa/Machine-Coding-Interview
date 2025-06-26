
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

const CheckBoxes = ({ data }) => {
  return <div>
    {data.map((node) => (
      <div className="parent" key={node.id}>
        <input className="checkbox" type="checkbox" />
        <span>{node.name}</span>
        {node.children && <CheckBoxes data={node.children} />}
      </div>
    ))}
  </div>
}

function App() {
  return (
    <>
      <div className="container">
        <h2>
          Nested Checkboxes
        </h2>
      </div>
      <div className="checkbox-container">
        <CheckBoxes data={checkBoxData} />
      </div>
    </>
  )
}

export default App
