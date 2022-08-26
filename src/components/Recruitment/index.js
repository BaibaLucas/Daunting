import React, {useState} from "react";

import {data as WoWClasses} from '../../data/WowClasses';

const Recruitment = () => {

  const [openSpec, setOpenSpec] = useState([]);

  const toggle = (wowClass) => {
    // if it's in the array, then remove it
    if (openSpec.includes(wowClass)){
      const index = openSpec.indexOf(wowClass);
      if(index > -1) {
        setOpenSpec(openSpec.splice(index, 0));
      }
    }
    // If not in the array, then add it to the array
    else {
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
                      <div className="recruitment__container__card__bot__spec__container__name">
                        {spec.name}
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