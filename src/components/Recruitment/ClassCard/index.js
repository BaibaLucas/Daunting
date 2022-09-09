import React, { useState } from "react";

const ClassCard = ({wowClass}) => {

    const [openSpec, setOpenSpec] = useState(false);

    const toggle = () => {
        setOpenSpec(!openSpec);
    }

    return (
        <div className='classCard' onClick={() => toggle()}>
            <div className='classCard__top'>
                <div className='classCard__top__class'>{wowClass.name}</div>
              <div className='classCard__top__class__img'>
                <img src={wowClass.img} alt={wowClass.name}/>
              </div>
            </div>
            <div className={openSpec === true ? 'classCard__bot' : 'hidden'} >
                <div className='classCard__bot__spec'>
                    {wowClass.spec.map((spec, ind) => {
                    return(
                        <React.Fragment key={ind}>
                            <div className='classCard__bot__spec__container'>
                                <div className="classCard__bot__spec__container__logo">
                                    <img src={spec.img} alt={spec.name + 'logo'}></img>
                                </div>
                                <div className={`classCard__bot__spec__container__plus ${spec.open}`}>
                                {spec.open}
                                </div>
                            </div>
                        </React.Fragment>
                    )
                    })}
                </div>
            </div>
        </div>
    )
};

export default ClassCard;