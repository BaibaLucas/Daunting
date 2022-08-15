import React from 'react';

const ModalContent = ({open, setOpen, img}) => {


  const closeModal = () => {
    setOpen(!open);
  }

  return (
    <div className={open ? 'modalcontent' : 'modalcontent close'}>
      <div className='modaltitle'>announcement</div>
      <div className='card'>
        <div className='illustration'>
          <img src={img} alt='illustration'></img>
        </div>
        <div className='description'>
          Discipline Priest
        </div>
      </div>
      <div className='dismiss' onClick={closeModal}>Dismiss</div>
      </div> 
  )
}

export default ModalContent;