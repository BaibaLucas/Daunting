import React from 'react';

import RaidCard from './RaidCard';
import {data as WoWRaids} from '../../data/WowRaids';


const Progress = () => {
  return(
    <div className='progress'>
      <div className='progress__container'>
        {WoWRaids.map((wowRaid, index) => {
          return(
            <RaidCard key={index} wowRaid={wowRaid}/>
          );
        })}
      </div>
      <div className="progress__footer">
        Copyright © Daunting. All right reserved.
      </div>
    </div>
  )
};

export default Progress;