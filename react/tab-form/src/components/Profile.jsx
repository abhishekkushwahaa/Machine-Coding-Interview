import React from 'react';

const Profile = ({ data, setData, errors }) => {
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
      {errors.name && <span className='error'>{errors.name}</span>}

      <label>Email : </label>
      <input type='email' value={email} onChange={(e) => handleDataChange(e, "email")} />
      {errors.email && <span className='error'>{errors.email}</span>}

      <label>Phone : </label>
      <input type='text' value={phone} onChange={(e) => handleDataChange(e, "phone")} />
      {errors.phone && <span className='error'>{errors.phone}</span>}

    </div>
  </div>;
};

export default Profile;
