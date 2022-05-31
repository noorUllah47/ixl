import React, { useState, useEffect } from "react";
import Incorect from "../../Components/Atom/Incorrect/Incorrect";
import Question from "../../Components/Atom/Question/Question";
import Stats from "../../Components/Atom/Stats/Stats";
import BreadCrumbs from "./BreadCrumbs";
import classes from "./Home.module.css";
import * as api from "../../api/api";
import useApi from "../../Hooks/useApi";
import { useParams } from "react-router-dom";
import LayOut from "../LayOut";
import nprogress from "nprogress";
// interface User {
//     // BOardid: number;
//   }

const Home = () => {

   
  let { id: param_id } = useParams();
  const [answer, setanswer] = useState("");
  const [submit, setsubmit] = useState(true);
  const [BOardid, setBoardid] = useState(10);
  const [resett, setreset] = useState(0);
  const [paramID, setparamID] = useState()
  const getMultiply = useApi(api.GetMultiplyQuestions);
  const getQ = useApi(api.GetBoardQuestion);
  const Startnewb = useApi(api.StartNewboard);
  const getMulDetails = useApi(api.GetBoardDetailsOfMlt);
  const complexity = useApi(api.UserComplexity);
  const getBDetails = useApi(api.GetBoardDetails);
  const deleteboard = useApi(api.DeleteBoard);

  
  async function handleDelete(id) {
    console.log("Clicked", id);
    try {
      const { data } = await deleteboard.request(id);
      console.log("Delete", data);
    } catch {}
  }
  async function fetchQData() {
  
        await getBDetails.request(BOardid);
      await complexity.request({
        id: BOardid,
        UserComplexityLevel: paramID,
      });
      const { data } = await getQ.request(BOardid);
    } 
  
  async function StartNew() {
    setreset(1);

    try {
      const { data } = await Startnewb.request();
      setBoardid(data.data.id);
      await getBDetails.request();
    } catch (error) {}
  }
  // console.log("Board new",BOardid)
  console.log("Question", getQ?.data);
  console.log("GetBoard detaile", getBDetails.data);

  console.log("sssssssssfafsads",param_id,paramID)
  useEffect(() => {
    setparamID(param_id)
    nprogress.start();
    fetchQData();
    return () => {
      nprogress.done();
  };
  }, [ paramID, BOardid]);

  const expectedAns =getQ?.data?.data?.ExpectedAnswer + "";
  const Details =  getBDetails?.data?.data;
  console.log("answer===================>", answer, expectedAns);
  return (
    <>
      <div>
        <LayOut/>
        <div className="bg-light">
          <div className="container">
            <BreadCrumbs data={getQ.data?.data} />
          </div>
        </div>

        <div className="container ">
          <div className="d-flex w-100">
            <div className={`${classes.practiceView} order-2 order-md-1 px-4`}>
              {submit === false ? (
                <Incorect
                  val={answer}
                  ans={expectedAns}
                  nextQ={fetchQData}
                  chan={setanswer}
                  setsubmit={setsubmit}
                  data={getQ?.data}
                />
              ) : (
                <Question
                  param_id={paramID}
                  details={Details}
                  chan={setanswer}
                  val={answer}
                  ans={expectedAns}
                  data={getQ?.data}
                  setsubmit={setsubmit}
                  nextQ={fetchQData}
                />
              )}
            </div>
            <Stats
              handleDelete={handleDelete}
              resett={resett}
              StartNew={StartNew}
              details={Details}
            />
          </div>
        </div>
        

      </div>
    </>
  );
};

export default Home;
