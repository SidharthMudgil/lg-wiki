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

import React from "react";
import store from "./appWrite/store/store";
import Signup from "./appWrite/login/signup";
import Login from "./appWrite/login/login";
import Admin from "./appWrite/admin/Admin";
import FetchTitle from "./docs/FetchTitle";
// import ImageUploader from "./pages/delete";
import ForgotPassword from "./appWrite/login/ForgotPassword";
import ResetPassword from "./appWrite/ResetPassword";




// All Routes for browsing in webpage

function App() {
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

  return (
    <React.StrictMode>
      <Provider store={store}>
              <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
