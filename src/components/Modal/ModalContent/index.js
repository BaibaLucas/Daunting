import React from 'react';

const ModalContent = ({open, setOpen, img}) => {


  const closeModal = () => {
    setOpen(!open);
  }

  return (
    <div className={open ? 'modalcontent' : 'modalcontent close'}>
      <div className='modalcontent__title'>announcement</div>
      <div className='modalcontent__card'>
        <div className='modalcontent__card__illustration'>
          <img src={img} alt='illustration'></img>
        </div>
        <div className='modalcontent__card__description'>
          Discipline Priest
        </div>
      </div>
      <div className='modalcontent__dismiss' onClick={closeModal}>Dismiss</div>
      </div> 
  )
}

export default ModalContent;