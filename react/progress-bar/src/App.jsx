import { useState } from "react"
import { useEffect } from "react"

const ProgressBar = ({ progress }) => {

  const [animatedProgress, setAnimatedProgree] = useState(0)

  useEffect(() => {
    setTimeout(() => setAnimatedProgree(progress), 100)
  }, [progress])

  return (
    <div className="outer">
      <div className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      > {progress}% </div>
    </div >
  )
}

function App() {
  return (
    <>
      <h1 className="title">Progress Bar</h1>
      <ProgressBar progress={69} />
    </>
  )
}

export default App
