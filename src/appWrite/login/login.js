import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Auth from "../services/auth";
import { login, logout } from "../store/authSlice";
export default function Login() {
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

  
  const userData = useSelector((state) => state.userData  );


  return !loading?<p> {userData}</p>  :null;

}




