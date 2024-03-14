import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';


import {useDispatch} from "react-redux";

import {useForm} from "react-hook-form";
import Auth from '../appWrite/services/auth';


export default function ForgotPassword() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const updatepass = async(data) => {
        setError("")
 
            const session = 
            console.log(data);
            try {
                // Request a password reset for the user
                await Auth.updatePass(data.email)
    
                setError('Password reset email sent. Check your inbox for further instructions.');
            } catch (error) {
                // Handle errors
                setError('Error sending password reset email. Please try again.');
                console.error('Error sending password reset email:', error);
            }}

  return (
    <div
    className='flex items-center justify-center w-full p-20 bg-[#121615]'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    {/* <span className="inline-block w-full max-w-[100px]">
                     
                    </span> */}
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">change password into  LG-WIKI</h2>
           {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(updatepass)} className='mt-8'>
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

