import React from 'react';

const Setting = ({ data, setData, errors }) => {
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
      {errors.theme && <span className='error'>{errors.theme}</span>}
    </div>
  </div>;
};
export default Setting;
