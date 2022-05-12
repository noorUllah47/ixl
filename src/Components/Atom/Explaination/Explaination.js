import React from 'react';
import Review from './Review';
import Solve from './Solve';


const Explaination = (props) => {
    return (
        <>
            <div>
                <div className="mb-3">

                    <div className="tab-box review-box">
                        <Review data={props?.data} ans={props.ans} val={props.val} />
                    </div>
                    {/* <div className="tab-box solve-box">
                        <Solve />
                    </div> */}

                </div>
            </div>
        </>
    );
}

export default Explaination;