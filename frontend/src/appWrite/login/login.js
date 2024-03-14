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
    <div
    className='flex items-center justify-center w-full p-20 bg-[#121615]'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    {/* <span className="inline-block w-full max-w-[100px]">
                     
                    </span> */}
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign into  LG-WIKI</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='flex flex-col gap-4  '>
                <input 
                              placeholder="Enter your email"
                              className='p-5'
                type="email"
                {...register("email", {
                    required: true,
                   
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <input 
                
                type="password"
                className='p-5'
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <button
                type="submit"
                className="w-full text-xl p-5 font-semibold rounded-full hover:text-[#f5a942] hover:bg-[#1e2524]"
                >Sign in</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login