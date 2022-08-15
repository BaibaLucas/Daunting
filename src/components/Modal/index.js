import React, { useState, useEffect } from 'react';
import CatchEye from './CatchEye';
import ModalContent from './ModalContent';

const Modal = ({img}) => {

  /// Modal State
  const [open, setOpen] = useState(false);

  // Detect windows size. If user modify height screen disable modale.
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [height, width]);

  return (
      <>
      {height > 300 && (
        <div className={open ? 'modal close' : 'modal'}>
        <div className='container'>
          <CatchEye open={open} setOpen={setOpen} />
          <ModalContent open={open} setOpen={setOpen} img={img}/>
        </div>
      </div>
      )}
      </>
  )
}

export default Modal;