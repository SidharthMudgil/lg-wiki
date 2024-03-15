import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';


import {useDispatch} from "react-redux";

import {useForm} from "react-hook-form";
import Auth from '../services/auth';


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
    className='flex   p-20 text-white bg-[#121615]'
    >
        <div className={`mx-auto  max-w-lg bg-[#293130] rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex ">
                    {/* <span className="inline-block w-full max-w-[100px]">
                     
                    </span> */}
        </div>
        <h2 className=" text-2xl font-bold leading-tight">Change password into  LG-WIKI</h2>
           {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(updatepass)}>
            <div className='flex flex-col gap-4  '>
    <label for="username" className="block text-white font-bold mb-2">Email</label>

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
                />
             
             <button type="submit" class= "bg-blue500  text-left hover:bg-amber-400 hover:text-black text-white font-bold py-2 w-20 px-4 rounded focus:outline-none focus:shadow-outline">Verify</button>

            </div>
        </form>
        </div>
    </div>
  )
}

