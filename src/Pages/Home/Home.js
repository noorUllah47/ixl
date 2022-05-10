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
    const [BOardid, setBoardid] = useState(Math.floor(Math.random() * 100)
    );
    const [resett, setreset] = useState(0);


    const getQ = useApi(api.GetBoardQuestion);
    const Startnewb = useApi(api.StartNewboard);
       
    const getBDetails = useApi(api.GetBoardDetails);


    async function fetchQData() {
// let id=Startnewb?.data?.id

        try {
            // const { data } = await camp.request();
            // setBoardid(Startnewb?.data?.id)
            const { data } = await getQ.request(BOardid);
             await getBDetails.request(BOardid);

        //    data = request.data.users
        
        
    } catch (error) {}  
}
async function StartNew() {
     setreset(1)
    // setBoardid(prev=>prev+1)
    try {
        const { data } = await Startnewb.request();
        setBoardid(data.id)
         await getBDetails.request();

    
    
} catch (error) {}  
}
console.log("Board new",BOardid)
console.log("Question",getQ.data)


console.log("ddddddddddddd",getBDetails.data)



    useEffect(() => {
     
    
fetchQData()
// StartNew()


}, [BOardid])

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
                            
                            {submit && answer !==expectedAns?  <Incorect val={answer} ans={expectedAns} nextQ={fetchQData}  chan={setanswer} setsubmit={setsubmit} data={getQ?.data} />: <Question chan={setanswer} val={answer} ans={expectedAns} data={getQ?.data} setsubmit={setsubmit}  nextQ={fetchQData} />}
                        </div>
                        <Stats  resett={resett} StartNew={StartNew} details={getBDetails?.data} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;