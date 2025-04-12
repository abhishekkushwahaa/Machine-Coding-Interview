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
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    }
  ]

  const ActiveTabComponent = tabs[activeTab].component

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1)
  }

  const handleNextClick = () => {
    setActiveTab((prev) => prev + 1)
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
      <ActiveTabComponent data={data} setData={setData} />
      {activeTab > 0 && < button onClick={handlePrevClick}> Prev</button>}
      {activeTab < tabs.length - 1 && < button onClick={handleNextClick}> Next</button>}
      {activeTab === tabs.length - 1 && < button onClick={handleSubmitClick}> Submit</button>}
    </div>
  </div >;
};

export default TabForm;
