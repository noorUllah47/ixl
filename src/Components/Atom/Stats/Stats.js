import React ,{useEffect}from 'react'
import Timerr from '../Timer/Timer';
import classes from './Stats.module.css'

import MyStopwatch from '../Timer/Timer';
const Stats = ({details}) => {


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
                                        <p className="mb-0"><MyStopwatch/></p>
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
                        </div>
        </>
     );
}
 
export default Stats;