import React ,{useEffect}from 'react';
import { useStopwatch } from 'react-timer-hook';

export default  function MyStopwatch({resett}) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  console.log("resttttt",resett)



  return (
    <div style={{textAlign: 'center'}}>
  
      <div style={{fontSize: '25px'}}>
     <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    
      </div>
    
    </div>
  );
}

