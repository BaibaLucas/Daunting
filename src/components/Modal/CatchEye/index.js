import React  from 'react';

const CatchEye = ({open, setOpen}) => {


  const openModal = () => {
    setOpen(!open);
  }
  return (
    <div className={open ? 'catcheye close' : 'catcheye'}>
      <div className='catcheye--vertical-description'
      onClick={openModal}>
        recruitment
      </div>
    </div>
  )
}

export default CatchEye;