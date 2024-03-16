import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';

import {useDispatch} from "react-redux";

import {useForm} from "react-hook-form";
import Auth from '../services/auth';


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await Auth.userlogin(data)
            if (session) {
                const userData = await Auth.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/admin")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="bg-[#121615] p-20">
    <div class="max-w-md mx-auto m-4 p-8 bg-[#293130] rounded shadow-md">
<h2 class="text-2xl text-white font-bold mb-4">Sign In </h2>

{error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    <form onSubmit={handleSubmit(login)} >
  <div class="mb-4">
    <label for="username" class="block text-white font-bold mb-2">Email</label>
    <input 
                          placeholder="Enter your email"
                          className='w-full border rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-blue-500'
            type="email"
            {...register("email", {
                required: true,
               
                validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
            })}
            required
            />  </div>

  <div class="mb-6">
    <label for="password" class="block text-white font-bold mb-2">Password</label>
    <input 
            
            type="password"
            className='w-full border rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-blue-500'

            placeholder="Enter your password"
            {...register("password", {
                required: true,
            })}
            required
            />  
            </div>
            <p className="mt-2 text-base text-white/60">
{/* Don&apos;t have any account?&nbsp; */}
<Link
    to="/verfiy"
    className="font-medium text-primary transition-all duration-200 hover:underline"
>
    Forgot Password
</Link>
</p>
  <button type="submit" class= "bg-blue500 hover:bg-amber-400 hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>

</form>

</div>
  </div>
 
  )
}

export default Login