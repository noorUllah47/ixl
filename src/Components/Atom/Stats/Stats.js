import React ,{useEffect}from 'react'
import Timerr from '../Timer/Timer';
import classes from './Stats.module.css'
import { useStopwatch } from 'react-timer-hook';

import MyStopwatch from '../Timer/Timer';
const Stats = ({details,StartNew,resett}) => {
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

function newboard(){
    StartNew()
    reset()
}
    return ( 
        <>
        <div className={`${classes.stateView} order-1 order-md-2`}>
                            <div>
                                <div className={`${classes.answered} bg-light`}>
                                    <div className={`${classes.heading} bg-lgtGreen fw-700 mb-0`}>
                                        <p className='text-white text-center py-1 mb-0'>Questions answered</p>
                                    </div>
                                    <div className={`${classes.value} fw-700 text-center py-3`}>
                                        <p className="mb-0">{details?.correctAnswers}</p>
                                    </div>
                                </div>
                                <div className={`${classes.time} bg-light`}>
                                    <div className={`${classes.heading} fw-700 mb-0`}>
                                        <p className='text-white text-center py-1 mb-0'>Time Elapsed</p>
                                    </div>
                                    <div className={`${classes.value} fw-700 text-center py-3`}>
                                        <p className="mb-0"> <div style={{textAlign: 'center'}}>
  
  <div style={{fontSize: '25px'}}>
 <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>

  </div>

</div></p>
                                    </div>
                                    {/* {MyStopwatch} */}
                                </div>
                                <div className={`${classes.score} bg-light`}>
                                    <div className={`${classes.heading} fw-700 mb-0`}>
                                        <p className='text-white text-center py-1 mb-0'>SmartScore out of 100</p>
                                    </div>
                                    <div className={`${classes.value} fw-700 text-center py-3`}>
                                        <p className="mb-0">{details?.userScore}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={newboard} className={`btn btn-primary ${classes.newbtn}`}> New </button>
                        </div>
        </>
     );
}
 
export default Stats;