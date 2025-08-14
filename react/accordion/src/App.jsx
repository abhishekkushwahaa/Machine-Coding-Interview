function App() {

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

  return (
    <div className="heading-container">
      <h2>Accordion</h2>
      <div>
        {items.map((item, index) => {
          return <div>
            <button>{item.title}</button>
            <div>{item.content}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
