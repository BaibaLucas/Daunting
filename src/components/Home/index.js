import React from "react";

import eyes from '../../assets/images/eyes.png';

const Home = () => {

  return (
    <div className='home'>
      <img className='homeImg' alt="eyes illustration" src={eyes} />
      <div className='content'>
        <div className='title'>
          Daunting
        </div>
        <div className='description'>
          coming soon
        </div>
        <div className='server'>
          EU-Sulfuron PVP
        </div>
        
      </div>
    </div>
  )

};

export default Home;