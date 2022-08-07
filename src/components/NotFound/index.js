import React from "react";

import eyes from '../../assets/images/eyes.png';

const NotFound = () => {

  return (
    <div className='notFound'>
      <div className='container'>
        <img className='homeImg' alt="eyes illustration" src={eyes} />
        <div className='content'>
          <div className='number'>
            404
          </div>
          <div className='title'>
            page not found
          </div>
          <div className='description'>
            The page you are looking for might have been removed had its name changed or temporarily unavailable
          </div>
          <a href='/'>
            <div className='button'>
            go to homepage
            </div>
          </a>
        </div>
      </div>
    </div>
  )

};

export default NotFound;