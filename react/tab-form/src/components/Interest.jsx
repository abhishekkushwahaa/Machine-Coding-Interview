import React from 'react';

const Interest = ({ data, setData, errors }) => {
  const { interest } = data

  const handleDataChange = (e, name) => {
    setData((prevState) => ({ ...prevState, interest: e.target.checked ? [...prevState.interest, e.target.name] : [prevState.interest.filter((i) => i !== e.target.name)] }))
  }

  return <div>
    <div>
      <label>
        <input type='checkbox' name="Coding" checked={interest.includes("Coding")} onChange={handleDataChange} />
        Coding
      </label>
      <br></br>
      <label>
        <input type='checkbox' name="Porn" checked={interest.includes("Porn")} onChange={handleDataChange} />
        Porn
      </label>
      <br></br>
      <label>
        <input type='checkbox' name="Movie" checked={interest.includes("Movie")} onChange={handleDataChange} />
        Movie
      </label>
      <br></br>
      <label>
        <input type='checkbox' name="Cricket" checked={interest.includes("Cricket")} onChange={handleDataChange} />
        Cricket
      </label>
      {errors.interest && <span className='error'>{errors.interest}</span>}
    </div>
  </div>;
};

export default Interest;
