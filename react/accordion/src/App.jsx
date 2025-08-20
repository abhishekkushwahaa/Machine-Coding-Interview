import { useState } from "react"

const items = [
  {
    title: "JavaScript",
    content: "Nodejs, Reactjs, React Native, Nodejs, Nextjs etc."
  },
  {
    title: "Golang",
    content: "Mux, Gin, Concurrency etc."
  },
  {
    title: "Python",
    content: "Django, Flask, Streamlit etc."
  }
]

function App() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="heading-container">
      <h2>Accordion</h2>
      <div className="accordion">
        {items.map((item, index) => {
          return <div key={index} className="accordion-section">
            <button className="accordion-title">{item.title}</button>
            {openIndex === index && <div className="accordion-content">{item.content}</div>}          </div>
        })}
      </div>
    </div>
  )
}

export default App
