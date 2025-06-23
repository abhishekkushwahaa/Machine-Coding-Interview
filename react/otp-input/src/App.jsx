import { useState, useRef, useEffect } from "react";

const OTP_COUNT_DIGITS = 5;

function App() {

  const [inputArr, setInputArr] = useState(new Array(OTP_COUNT_DIGITS).fill(""))

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, [])

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim()
    const newArr = [...inputArr]
    newArr[index] = newValue.slice(-1) // Takes only last digit
    setInputArr(newArr)
    newValue && refArr.current[index + 1]?.focus();
  }

  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === 'Backspace') {
      refArr.current[index - 1]?.focus();
    }
  }

  return (
    <>
      <div className="container">
        <h2>OTP-Input</h2>
      </div>
      <div className="otp-container">
        {
          inputArr.map((input, index) => {
            return <input
              className="otp-input"
              key={index}
              type="text"
              value={inputArr[index]}
              ref={(input) => (refArr.current[index] = input)}
              onChange={(e) => { handleOnChange(e.target.value, index) }}
              onKeyDown={(e) => { handleOnKeyDown(e, index) }}
            ></input>
          })
        }
      </div>
    </>
  )
}

export default App
