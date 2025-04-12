import React from 'react';
import Profile from "./Profile"
import Interest from "./Interest"
import Setting from "./Setting"
import { useState } from 'react';

const TabForm = () => {
  const [data, setData] = useState({
    name: "Abhi",
    email: "abhi@gmail.com",
    phone: "123431313",
    interest: ["Coding", "Web Series", "Cricket", "Movie"],
    theme: "Dark"
  })

  const [errors, setErrors] = useState({})

  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {}
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid"
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid"
        }
        if (!data.phone || data.phone.length < 10) {
          err.phone = "Phone is not valid"
        }
        setErrors(err)

        return err.name || err.email || err.phone ? false : true
      }
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {}
        if (data.interest.length < 1) {
          err.interest = "Select at least one interest"
        }
        setErrors(err)

        return err.interest ? false : true
      }
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        const err = {}
        if (data.theme.length < 1) {
          err.theme = "Select a theme"
        }
        setErrors(err)

        return err.theme ? false : true
      }
    }
  ]

  const ActiveTabComponent = tabs[activeTab].component

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1)
    }
  }

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1)
    }
  }

  const handleSubmitClick = () => {
    console.log(data)
  }

  return <div className='tab-screen'>
    <div className='heading-container'>
      {tabs.map((t, index) => (
        <div key={index} className='heading'
          onClick={() => setActiveTab(index)}>
          {t.name}
        </div>
      ))}
    </div >
    <div className='tab-body'>
      <ActiveTabComponent data={data} setData={setData} errors={errors} />
      {activeTab > 0 && < button onClick={handlePrevClick}> Prev</button>}
      {activeTab < tabs.length - 1 && < button onClick={handleNextClick}> Next</button>}
      {activeTab === tabs.length - 1 && < button onClick={handleSubmitClick}> Submit</button>}
    </div>
  </div >;
};

export default TabForm;
