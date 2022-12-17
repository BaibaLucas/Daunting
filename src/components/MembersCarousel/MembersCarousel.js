import React, { useState, useEffect} from 'react';


const MembersCarousel = (data) => {

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setCurrentItemIndex((currentItemIndex + 1) % data.data.length),
      4000
    );
    return () => {
      clearInterval(id);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItemIndex]);

  return(
    <div 
      className="members-carousel"
      style={{
        backgroundImage: `url(${data.data[currentItemIndex].img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        maxWidth: ""
      }}
    >
      <div className="members-carousel-text">
        <div
          className="members-carousel-text-name"
        >
        {data.data[currentItemIndex].name}
        </div>
        <div
          className="members-carousel-text-desc"
        >
          " {data.data[currentItemIndex].desc} "
        </div>
      </div>
    </div>
  );

};

export default MembersCarousel;