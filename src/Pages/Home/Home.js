import React, { useState ,useEffect} from 'react'
import Incorect from '../../Components/Atom/Incorrect/Incorrect';
import Question from '../../Components/Atom/Question/Question';
import Stats from '../../Components/Atom/Stats/Stats';
import BreadCrumbs from './BreadCrumbs';
import classes from './Home.module.css';
import * as api from  "../../api/api"
import useApi from "../../Hooks/useApi";

const Home = () => {
 
    const [answer, setanswer] = useState('');
    const [submit, setsubmit] = useState(false);
    const getQ = useApi(api.GetBoardQuestion);
    const getBDetails = useApi(api.GetBoardDetails);
    async function fetchQData() {
        try {
            // const { data } = await camp.request();
            const { data } = await getQ.request();
             await getBDetails.request();

        //    data = request.data.users
        
        
    } catch (error) {}  
}
console.log("qqqqqqqqqqqqqqq",getQ.data)

console.log("ddddddddddddd",getBDetails.data)

    useEffect(() => {
     
    
fetchQData()
}, [])

const expectedAns= getQ?.data?.expectedAnswer+"";

console.log("answer",answer)
    return (
        <>
            <div>
                <div className="bg-light">
                    <div className="container">
                        <BreadCrumbs />
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="d-flex w-100">
                        <div className={`${classes.practiceView} order-2 order-md-1 px-4`}>
                            
                            {submit && answer !==expectedAns?  <Incorect val={answer} ans={expectedAns} nextQ={fetchQData}  chan={setanswer} setsubmit={setsubmit}  />: <Question chan={setanswer} val={answer} ans={expectedAns} data={getQ?.data} setsubmit={setsubmit}  nextQ={fetchQData} />}
                        </div>
                        <Stats details={getBDetails?.data} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;