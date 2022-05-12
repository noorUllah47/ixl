import React from 'react';
import Explaination from '../Explaination/Explaination';
import classes from './incorect.module.css'

const Incorect = (props) => {
    const backtoQ = () => {
        console.log({ props })
     
            
                props.nextQ()
                props.setsubmit(false)
                props.chan("")
      
        // }

    }

    return ( 
        <>
        <div>
            <p className={classes.feedback_inc_p}>Sorry, incorrect...</p>
            <p className='t-green fs-20 mb-3'>The correct answer is:</p>
            
            <input className={classes.answerFeild} value={props.ans} readOnly={true} />
            <div>
            <button className="crisp-button ms-auto" onClick={backtoQ} >Got it</button>
            </div>
            <Explaination data={props?.data} val={props.val} />
        </div>
        </>
     );
}
 
export default Incorect;