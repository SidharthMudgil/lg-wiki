import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import MainContent from "./pages/homeScreen/MainContent";
// import Doc from "./pages/documentation/Doc";
import UserInput from "./appWrite/userContribution/UserInput";
import Layout from "./pages/leftNavigation/Layout";
import NavigatorHeader from "./pages/navigationHeader/NavigationHeader";
import Architecture from "./pages/architecture/Architecture";
import { Provider } from "react-redux";
import RigInstall from './docs/RigInstall'
import ControlCommand from './docs/ControlCommand'

import React, { useEffect } from "react";
import store from "./appWrite/store/store";
import Signup from "./appWrite/login/signup";
import Login from "./appWrite/login/login";
import Admin from "./appWrite/admin/Admin";
import FetchTitle from "./docs/FetchTitle";
// import ImageUploader from "./pages/delete";
import ForgotPassword from "./appWrite/login/ForgotPassword";
import ResetPassword from "./appWrite/ResetPassword";
import { useState } from "react";




// All Routes for browsing in webpage

function App() {
  const [resolution, setResolution]=useState();


// moblie function 
  function Resizewin(){
    

      const res = window.innerWidth;
      if (res >= 320 && res <= 510) {
        setResolution(true);
        
        
      } else if (res >= 768 && res <= 1930) {
      
        setResolution(false);
      }
    }
  
    useEffect(() => {
      Resizewin();
      window.addEventListener('resize', Resizewin);
  
    });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavigatorHeader />}>
        <Route path="" element={<MainContent />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="input" element={<UserInput />} />
        <Route path="verfiy" element={<ForgotPassword />} />
        <Route path="newpass" element={<ResetPassword />} />
     
        <Route path="/admin" element={<Admin />} />
 
        

        <Route path="docs" element={<Layout />}>
          <Route path="arc" element={<Architecture />} />
        <Route path="rig" element={<RigInstall />} />
        <Route path="control" element={<ControlCommand />} />
        <Route path="dynamic" element={<FetchTitle />} />


        </Route>
      </Route>
    )
  );
const moblie=()=>{
 return( <React.StrictMode>
    
  <Provider store={store}>
          <RouterProvider router={router} />
  </Provider>
</React.StrictMode>);

}
const desktop=()=>{
  
 return(
    <React.StrictMode>
       <div className="flex items-center justify-center w-screen h-screen bg-[#1e2524]">
  < div className=
  "relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words overflow-y-auto subpixel-antialiased text-center text-white"><p>Please use a desktop or a laptop.<br/>We do not support mobile devices.</p>
  </div>
    </div>
    </React.StrictMode>
);
}


  return  resolution?desktop():moblie();

}
export default App;
