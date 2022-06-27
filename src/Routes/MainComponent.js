import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../Pages/Home/Home";
import Multiplication from "../Pages/Multiplication";
import SignIn from "../Components/Atom/SignIn.js/Signin";
import Category from "../Components/Atom/category/Category";



const MainComponent = () => {
  const [siginin, setsiginin] = useState(1)



  return (
    <>
    
    {/* <Donut /> */}
    <Routes>
       
       <Route path="/Multiply" element={<Multiplication />} />
         
         <Route path="/questions/:id" element={<Home />} />
         <Route path="/" element={<Category />} />
         <Route path="/signin" element={<SignIn />} />
 
 
       </Routes>
    
      
    </>
  );
};

export default MainComponent;
