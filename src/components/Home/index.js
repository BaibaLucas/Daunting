import React from "react";

import CountDownTimer from '../CountDown';
import Modal from '../Modal';
import Priest from '../../assets/images/DPrecruit.png';

const Home = () => {

  const wotlkLaunch = new Date("Sep 27, 2022 00:00:00");

  return (
    <div className='home'>
      <div className='content'>
        <div className='content-text'>
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
        <CountDownTimer targetDate={wotlkLaunch}/>
        <Modal img={Priest}/>
      </div>
    </div>
  )

};

export default Home;