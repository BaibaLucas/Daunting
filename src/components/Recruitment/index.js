import React, {useState} from "react";

import WoWClasses from '../../data/WowClasses.json';

const Recruitment = () => {

  const [openSpec, setOpenSpec] = useState(false);

  const showMeSpecs = () => {
    setOpenSpec(!openSpec);
  }

  return (
    <div className='recruitment'>
      <div className='recruitment__container'>
        {WoWClasses.map((wowClass, index) => {
          return(
            <>
            <div  className='recruitment__container__card' onClick={showMeSpecs}>
              <div  className='recruitment__container__card__top'>
              <div  key={index} className='recruitment__container__card__top__class'>{wowClass.name}</div>
              <div className='recruitment__container__card____top__img'>img</div>
              </div>
              <div  className={openSpec ? 'recruitment__container__card__bot' : 'close'} >
              <div className='recruitment__container__card__bot__spec'>
                {wowClass.spec.map((spec, index) => {
                  return(
                    <>
                    <div key={spec.name} className='recruitment__container__card__bot__spec__container'>
                      <div  className="recruitment__container__card__bot__spec__container__name">
                        {spec.name}  
                      </div>
                      <div className="recruitment__container__card__bot__spec__container__plus">
                        {spec.open}  
                      </div>
                    </div>
                    </>
                  )
                })}
              </div>
              </div>
            </div>
            </> 
          );
        })
      }
      </div>
    </div>
  )

};

export default Recruitment;