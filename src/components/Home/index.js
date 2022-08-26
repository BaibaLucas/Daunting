import React from "react";


import arthas from '../../assets/images/arthasrecruit.png';
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
        <Modal img={arthas} wowClass={''}/>
      </div>
    </div>
  )

};

export default Home;