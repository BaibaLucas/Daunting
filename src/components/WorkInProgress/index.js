import React from 'react';
import eyes from '../../assets/images/eyes.png';




const WorkInProgress = () => {


  return(
    <div className='workinprogress'>
      <div className='workinprogress__container'>
        <img className='workinprogress__container__homeImg' alt="eyes illustration" src={eyes} />
        <div className='workinprogress__container__content'>
          <div className='workinprogress__container__content__title'>
            Website Under Construction
          </div>
          <div className='workinprogress__container__content__description'>
            New website under construction thank you for your patience
          </div>
          <a href='/'>
            <div className='workinprogress__container__content__button'>
            go to homepage
            </div>
          </a>
        </div>
      </div>
    </div>
  )
};

export default WorkInProgress