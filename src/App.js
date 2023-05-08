import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";

import Ieee from "./component/Ieee";
import C2s2 from "./component/C2s2";
import Matrix from "./component/Matrix";
import Acm from "./component/Acm";
import CodeChef from "./component/CodeChef";
import ToastMaster from "./component/ToastMaster";
// import React from "react";
// import LoginForm from "./component/login";
// import SignUp from "./component/SignUp";
function App() {
  return (
   <>
<BrowserRouter>
    
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/IEEE" element={<Ieee/>}/>
      <Route path="/C2S2" element={<C2s2/>}/>
      <Route path="/MATRIX" element={<Matrix/>}/>
      <Route path="/ACM" element={<Acm/>}/>
      <Route path="/CODECHEF" element={<CodeChef/>}/>
      <Route path="/TOASTMASTER" element={<ToastMaster/>}/>
      
      

    </Routes>
    </BrowserRouter>
</>
  // <SignUp/>
  // <LoginForm/>


  );
}

export default App;
