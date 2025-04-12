import React from 'react';

const Profile = ({ data, setData }) => {
  const { name, email, phone } = data

  const handleDataChange = (e, item) => {
    setData(prevState => ({
      ...prevState,
      [item]: e.target.value,
    }))
  }

  return <div>
    <div className='profile-form'>
      <label>Name : </label>
      <input type='text' value={name} onChange={(e) => handleDataChange(e, "name")} />

      <label>Email : </label>
      <input type='email' value={email} onChange={(e) => handleDataChange(e, "email")} />

      <label>Phone : </label>
      <input type='text' value={phone} onChange={(e) => handleDataChange(e, "phone")} />
    </div>
  </div>;
};

export default Profile;
