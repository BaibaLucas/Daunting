import React from "react";

import {data as WoWClasses} from '../../data/WowClasses';
import ClassCard from "./ClassCard";

const Recruitment = () => {

  return (
    <div className='recruitment'>
      <div className='recruitment__container'>
        {WoWClasses.map((wowClass, index) => {
          return(
            <ClassCard key={index} wowClass={wowClass} />
          );
        })
      }
      </div>
    </div>
  )

};

export default Recruitment;