import React from "react";


import DK from '../../assets/images/DKrecruit.png';
import CountDownTimer from '../CountDown';
import Modal from '../Modal';

const Home = () => {

  const wotlkLaunch = new Date("Sep 27, 2022 00:00:00");

  return (
    <div className='home'>
      <div className='home__content'>
        <div className='home__content__text'>
          <div className='home__content__text__title'>
            Daunting
          </div>
          <div className='home__content__text__description'>
            coming soon
          </div>
          <div className='home__content__text__server'>
            EU-Sulfuron PVP
          </div>
        </div>
        <CountDownTimer targetDate={wotlkLaunch}/>
        <Modal img={DK} wowClass={'Death Knight'}/>
      </div>
    </div>
  )

};

export default Home;