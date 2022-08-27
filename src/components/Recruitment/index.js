import React, {useState} from "react";

import {data as WoWClasses} from '../../data/WowClasses';

const Recruitment = () => {

  const [openSpec, setOpenSpec] = useState([{}]);

  const toggle = (wowClass) => {
    // if it's in the array, then remove it
    // debugger;
    if (openSpec.includes(wowClass)){
      console.log('OpenSpec is not empty', openSpec);
      const index = openSpec.indexOf(wowClass);
      console.log('index', index);
      if(index > -1) {
        /**
         * @TODO remove 1 ELEMENT from array
         */
        setOpenSpec(openSpec.splice(0, index));
      }
    }
    // If not in the array, then add it to the array
    else {
      /** 
       * replace @param openSpec instead @param ...openSpec 
       * Only Open 1 by 1
       * */ 
      setOpenSpec([...openSpec, wowClass]);
    }
  }

  return (
    <div className='recruitment'>
      <div className='recruitment__container'>
        {WoWClasses.map((wowClass, i) => {
          return(
            <React.Fragment key={i}>
            <div className='recruitment__container__card' onClick={() => toggle(wowClass.name)}>
              <div className='recruitment__container__card__top'>
              <div className='recruitment__container__card__top__class'>{wowClass.name}</div>
              <div className='recruitment__container__card__top__class__img'>
                <img src={wowClass.img} alt={wowClass.name}/>
              </div>
              </div>
              <div  className={openSpec.includes(wowClass.name)? 'recruitment__container__card__bot' : 'hidden'} >
              <div className='recruitment__container__card__bot__spec'>
                {wowClass.spec.map((spec, ind) => {
                  return(
                    <React.Fragment key={ind}>
                    <div key={'index'+ind}className='recruitment__container__card__bot__spec__container'>
                      <div className="recruitment__container__card__bot__spec__container__logo">
                        <img src={spec.img} alt={spec.name + 'logo'}></img>
                      </div>
                      <div className={`recruitment__container__card__bot__spec__container__plus ${spec.open}`}>
                        {spec.open}
                      </div>
                    </div>
                    </React.Fragment>
                  )
                })}
              </div>
              </div>
            </div>
            </React.Fragment>
          );
        })
      }
      </div>
    </div>
  )

};

export default Recruitment;