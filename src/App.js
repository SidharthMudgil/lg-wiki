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

import React from "react";
import store from "./appWrite/store/store";
import Signup from "./appWrite/login/signup";
import Login from "./appWrite/login/login";
import Delete from "./appWrite/login/Delete";
import Admin from "./appWrite/admin/Admin";

// All Routes for browsing in webpage

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavigatorHeader />}>
        <Route path="" element={<MainContent />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="input" element={<UserInput />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="docs" element={<Layout />}>
          <Route path="arc" element={<Architecture />} />
        <Route path="rig" element={<RigInstall />} />
        <Route path="control" element={<ControlCommand />} />

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
