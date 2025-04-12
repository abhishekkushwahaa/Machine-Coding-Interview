import React from 'react';

const Setting = ({ data, setData }) => {
  const { theme } = data

  const handleDataChange = (e) => {
    setData((prevState => ({ ...prevState, theme: e.target.name })))
  }

  return <div>
    <div>
      <label>
        <input type='radio' name="Dark" checked={theme === "Dark"} onChange={handleDataChange} />
        Dark
      </label>
      <br></br>
      <label>
        <input type='radio' name="Light" checked={theme === "Light"} onChange={handleDataChange} />
        Light
      </label>
    </div>
  </div>;
};
export default Setting;
