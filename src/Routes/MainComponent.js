import { Routes, Route } from "react-router-dom";
import MyStopwatch from "../Components/Atom/Timer/Timer";
import Category from "../Components/Atom/category/Category";
import App from "../Pages/Chart";
import Donut from "../Pages/Chart";
import Chaart from "../Pages/Chart";
import CustomNodeFlow from "../Pages/Chart";
import Chartt from "../Pages/Chart";
import Chart from "../Pages/Chart";
import Home from "../Pages/Home/Home";

const MainComponent = () => {
  return (
    <>
    {/* <Donut /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />


        
        
      </Routes>
    </>
  );
};

export default MainComponent;
