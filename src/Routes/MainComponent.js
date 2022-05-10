import { Routes, Route } from "react-router-dom";
import MyStopwatch from "../Components/Atom/Timer/Timer";
import Home from "../Pages/Home/Home";

const MainComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        
        
      </Routes>
    </>
  );
};

export default MainComponent;
