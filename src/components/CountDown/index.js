import React from 'react';
import useCountdown from './useCountdown';
import WotlkImg from '../../assets/images/Wotlk.png';



// Component when timer has expired
const Expired = () => {
  return (
    <div className='expired'>
      <span>Expired</span>
      <p>Please lect a future date and time</p>
    </div>
  );
};

// Component displaying date
const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className='countdown'>
      <p className='countdown__timevalue'>{value}</p>
      <span className='countdown__typevalue'>{type}</span>
    </div>
  )
};

// Count component
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='showcounter'>
      <div className='showcounter__imgcontainer'>
        <img src={WotlkImg} alt='wotlk illust'></img>
      </div>
      <div className='showcounter__container'>
        <DateTimeDisplay value={days} type={'Days'} />
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </div>
  )
}

// Component countDownTimer
const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <Expired />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountDownTimer;