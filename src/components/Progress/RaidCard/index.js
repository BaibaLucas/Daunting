import React from 'react';


const RaidCard = ({ wowRaid }) => {

  return(
    <div className='raidCard'>
      <div className='raidCard__illust'>
        <img className='raidCard__illust__img' src={wowRaid.img} alt={`${wowRaid.name} + logo`}>
        </img>
      </div>
      <div className='raidCard__content'>
        <div className='raidCard__content__name'>
          {wowRaid.name}
        </div>
        <div className='raidCard__content__text'>
          {wowRaid.mode.map((mode, index) => {
            return(
              <div key={index} className='raidCard__content__text__row'>
                <div className="raidCard__content__text__row__name">
                  {mode.name}
                </div>
                <div className={`raidCard__content__text__row__progress ${mode.clean === false ? "notclean" : "done"}`}>
                  {mode.progress}
                </div>
                {mode.bonus && (
                  <div className={`raidCard__content__text__row__bonus ${mode.bclean === false ? "notclean" : "done"}`}>
                  {mode.bonus}
                </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default RaidCard;
