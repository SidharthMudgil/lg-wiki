import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Auth from "../services/auth";
import { login, logout } from "../store/authSlice";
import uploadService from "../services/uplaod";
export default function Login() {
  const [loading, setLoading] = useState("true");
  const dispatch = useDispatch();
  const [Error ,setError]=useState("");

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

  const login = async(data) => {
    setError("")
    try {
        const session = await Auth.login(data)
        if (session) {
            const userData = await Auth.getCurrentUser()
            if(userData) dispatch(login(userData));
    
        }
    } catch (error) {
        setError(error.message)
    }
}
  const userData = useSelector((state) => state.userData  );


  return !loading?<p> {userData}</p>  :null;

}




