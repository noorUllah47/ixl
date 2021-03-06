import React, { useState ,useEffect} from 'react'
import classes from './Qstn.module.css'
import * as api from "../../../api/api"
import useApi from "../../../Hooks/useApi";
import Donut from '../../../Pages/Chart';
import { Link } from 'react-router-dom';

const Question = (props) => {
    console.log("Expected asnswewe",props.ans, props.data?.data?.id,"param",props.param_id)
    const [inputval, setInput] = useState();
    const [modeltogle, setModeltogle] = useState()
    const [graphInput, setGraphInput] = useState({
        x:0,
        y:0
    });
    console.log("finallllllllllll-----------------",graphInput)
    const graphvalues=`x = ${graphInput.x}, y = ${graphInput.y}`
    const postans= useApi(api.answerSubmit)
    console.log(inputval)
    useEffect(() => {
    
        if(props.details?.UserComplexityLevel===1){
            setModeltogle(graphvalues)}
            else{
           setModeltogle(inputval)
            }
    }, [props.param_id,inputval])
    useEffect(() => {
    
        if(props.param_id==="1"){
            setModeltogle(graphvalues)}
            else{
           setModeltogle(inputval)
            }
    }, [props.param_id,graphvalues])
    
    const hidemodal = async ()  => {
        props.chan(inputval)
    // if(props.details.UserComplexityLevel<1){
        // props.chan(graphInput)
    // }

    // props.setsubmit(true)
    // if(graphvalues){
    //         props.setsubmit(false)
    //         setInput(false)
    //     }
        // else{
            
            if(props.param_id==="1"){
                props.chan(graphvalues)
            try{
           
                const {data}= await postans.request({
                   "questionId": props.data?.data?.id,
                   "answer": graphvalues
       
                })
                if (graphvalues === props.ans) {
                    props.setsubmit(true)

                    setTimeout(() => {
                        props.nextQ()
                        document.getElementById("cls").click();
                        // props.setsubmit(false)
                        console.log("aaaaaaaa")
                        // setInput("")
                        // props.chan("")
                    }, 1000);
                }
                else{
                    props.setsubmit(false)

                }
                console.log("ansresponse",data)
            }
            catch{}
            console.log({ props })
        }else{
            try{
           
                const {data}= await postans.request({
                   "questionId": props.data?.data?.id,
                   "answer": inputval
       
                })
                if (inputval?.replace(/\s/g, '') === props.ans.replace(/\s/g, '')) {
                    props.setsubmit(true)
                    setTimeout(() => {
                        props.nextQ()
                        document.getElementById("cls").click();
                        // props.setsubmit(false)
                        console.log("aaaaaaaa")
                        // setInput("")
                        // props.chan("")
                    }, 1000);
                }
                else{
                    props.setsubmit(false)

                }
                setInput("")
                console.log("ansresponse",data)
            }
            catch{}
        }
            
            // }
            
            
            
        }
function handleNext(){
    window.reload()
}
  console.log("modeltogooooooooooooo",modeltogle,props.param_id)
    return (
        <>
            <p>
            {/* Graph these points: L1 (8,5) L2 (3,7)  */}
{/*  */}

             Q:   {props?.data?.data?.Statement}
            
                </p>
               <div className='instruction mb-3'>
                   {props.param_id==="4"&&<span className='mx-3 fw-bold'>Solve according to : y = mx + c</span>}
               </div>
            {/* <p className="fw-700">five</p> */}
            <div className='questiondiv' >
                {props.param_id>1?
                <>
                
                 <input required="true" name='answer'   value={inputval} className={classes.answerFeild} onChange={e => { setInput(e.target.value) }} /> 
                 {/* <input type="submit" hidden /> */}
                 {/* {!inputval?<span style={{fontSize:"16px",color:"red"}}> fill this </span>:""} */}
                 </>
                 :         
                <Donut
                ans={props.ans}
                gInput={setGraphInput}
                />
                }
                
                {/* <input required="true" name='answer' value={props.val} className={classes.answerFeild} onChange={e => { props.chan(e.target.value) }} /> */}
            </div>
            <div className="mt-3 d-flex ">
            {/* {modeltogle }---{props.ans} */}
                    <button type="submit" className="bg-lgtGreen border-0 text-white rounded px-3 py-1" data-bs-toggle={modeltogle?.replace(/\s/g, '') !== props.ans.replace(/\s/g, '')? "":"modal"} data-bs-target="#exampleModal" onClick={hidemodal}>Submit</button>
                   {/* { props.param_id==="2"? <Link to={{ pathname:`/questions/${3}`,state: { name: "Ali" }}}className=' btn btn-primary skill_link mx-2'onClick={handleNext} >Next </Link>
:""}
   { props.param_id==="3"? <Link to={{ pathname:`/questions/${2}`,state: { name: "Ali" }}} onClick={handleNext} className=' btn btn-primary skill_link mx-2' >back </Link>
:""} */}
                  

            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <section aria-live="assertive" aria-atomic="true" className="accolades">
                                <img className="cae-checkmark" src="data:image/svg+xml,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='67px' height='60px' viewBox='0 0 67 60' style='enable-background:new 0 0 67 60;' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill-rule:evenodd;clip-rule:evenodd;fill:%238CC714;%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M5,27c0,0,5.1,2.5,9.5,5.7c2.7,2,6.8,4.9,6.8,4.9S30.4,26.6,41,17C51.4,7.6,62,0,62,0l5,5c0,0-13.6,13.8-25,28 C31.4,46.2,23,59.9,23,60c0,0-11.7-16.2-23-28L5,27z'/%3e %3c/g%3e %3c/svg%3e" alt="" />
                                <h4>Fantastic!</h4></section>
                             </div>
                            <button type="button" id="cls" className="close border-0" data-bs-dismiss="modal" aria-label="Close">
        
                            {/* <span aria-hidden="true">&times;</span> */}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Question;