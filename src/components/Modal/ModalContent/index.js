import React from 'react';
import { NavLink } from 'react-router-dom';

const ModalContent = ({open, setOpen, img, wowClass}) => {


  const closeModal = () => {
    setOpen(!open);
  }

  return (
    <div className={open ? 'modalcontent' : 'modalcontent close'}>
      <div className='modalcontent__title'>announcement</div>
      <div className='modalcontent__card'>
        <NavLink to='/recruitment'>
        <div className='modalcontent__card__illustration'>
          <img src={img} alt='illustration'></img>
        </div>
        <div className='modalcontent__card__description'>
          {wowClass}
        </div>
        </NavLink>
      </div>
      <div className='modalcontent__dismiss' onClick={closeModal}>Dismiss</div>
      </div> 
  )
}

export default ModalContent;