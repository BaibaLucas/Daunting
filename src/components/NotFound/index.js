import React from "react";

import eyes from '../../assets/images/eyes.png';

const NotFound = () => {

  return (
    <div className='notFound'>
      <div className='notFound__container'>
        <img className='notFound__container__homeImg' alt="eyes illustration" src={eyes} />
        <div className='notFound__container__content'>
          <div className='notFound__container__content__number'>
            404
          </div>
          <div className='notFound__container__content__title'>
            page not found
          </div>
          <div className='notFound__container__content__description'>
            The page you are looking for might have been removed had its name changed or temporarily unavailable
          </div>
          <a href='/'>
            <div className='notFound__container__content__button'>
            go to homepage
            </div>
          </a>
        </div>
      </div>
    </div>
  )

};

export default NotFound;