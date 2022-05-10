import React from 'react'

const Review = (props) => {
    return (
        <>
                <div className="tab-box-hd">
                    <h4 className="rot-neg-90">review</h4>
                </div>
                <div className="tab-box-bd my-3 mx-4">
                    <div className="disabled-question  ixl-practice-crate en">
                        <p>How do you write this number using digits?{props?.data?.statement}</p>
                        {/* <p><b>five</b></p> */}
                        <input className='answerFeild' value={''} readOnly={true} />
                    </div>
                    <h3 className='t-green fs-20 my-3'>You answered:</h3>
                    <input className='answerFeild' value={props.val} readOnly={true} />
                </div>
        </>
    );
}

export default Review;