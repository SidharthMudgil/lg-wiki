import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Auth from "../services/auth";
import { login, logout } from "../store/authSlice";
export default function login() {
  const [loading, setLoading] = useState("true");
  const dispatch = useDispatch();

  useEffect(() => {
    Auth.getCurrentUser()
    .then((userData)=>{ 

        if(userData){
            dispatch(login({userData}))
        } 
        else{
            dispatch(logout())
        }
    })
    .finally(()=>setLoading(false));
  }, []);


  return !loading?<div></div>:null;






}
