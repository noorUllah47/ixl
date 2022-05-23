import React, { useState ,useEffect} from 'react'
import Incorect from '../../Components/Atom/Incorrect/Incorrect';
import Question from '../../Components/Atom/Question/Question';
import Stats from '../../Components/Atom/Stats/Stats';
import BreadCrumbs from './BreadCrumbs';
import classes from './Home.module.css';
import * as api from  "../../api/api"
import useApi from "../../Hooks/useApi";
// interface User {
//     // BOardid: number;
//   }
   
const Home = () => {
 
    const [answer, setanswer] = useState('');
    const [submit, setsubmit] = useState(true);
    const [BOardid, setBoardid] = useState(Math.floor(Math.random() * 50)
    );
    const [resett, setreset] = useState(0);


    const getQ = useApi(api.GetBoardQuestion);
    const Startnewb = useApi(api.StartNewboard);
       
    const getBDetails = useApi(api.GetBoardDetails);
    const deleteboard= useApi(api.DeleteBoard)
 
    async function handleDelete(id){
        console.log("Clicked" ,id)
        try{
            const {data}= await deleteboard.request(id)
            console.log("Delete",data)
        }
        catch{}
    }
    async function fetchQData() {

        try {
          
            const { data } = await getQ.request(BOardid);
             await getBDetails.request(BOardid);

     
        
        
    } catch (error) {}  
}
async function StartNew() {
     setreset(1)
   
    try {
        const { data } = await Startnewb.request();
        setBoardid(data.data.id)
         await getBDetails.request();

    
    
} catch (error) {}  
}
console.log("Board new",BOardid)
console.log("Question",getQ?.data)
console.log("GetBoard detaile",getBDetails.data)






    useEffect(() => {
     
    
fetchQData()



}, [BOardid])

const expectedAns= getQ?.data?.data?.ExpectedAnswer+"";
const Details=getBDetails?.data?.data
console.log("answer",answer,expectedAns)
    return (
        <>
            <div>
                <div className="bg-light">
                    <div className="container">
                        <BreadCrumbs data={getQ.data?.data}/>
                    </div>
                </div>

                <div className="container ">
                    <div className="d-flex w-100">
                        <div className={`${classes.practiceView} order-2 order-md-1 px-4`}>
                            
                            {submit ===false?  <Incorect val={answer} ans={expectedAns} nextQ={fetchQData}  chan={setanswer} setsubmit={setsubmit} data={getQ?.data} />: <Question  details={Details} chan={setanswer} val={answer} ans={expectedAns} data={getQ?.data} setsubmit={setsubmit}  nextQ={fetchQData} />}
                        </div>
                        <Stats handleDelete={handleDelete} resett={resett} StartNew={StartNew} details={Details} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;