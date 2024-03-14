import React from "react";
import { useDispatch } from "react-redux";
import Auth from "../services/auth";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
 

import { useNavigate } from "react-router-dom";

 ;

export default function Signup() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const userData = await Auth.createAccount(data)
      if (userData) {
          const userData = await Auth.getCurrentUser()
          if(userData) {
            dispatch(login(userData));
            navigate('/admin')
          }
         
      }
  } catch (error) {
      throw error;
  }
}

  return (
    <div className="bg-[#121615] p-20">
      <div class="max-w-md mx-auto m-4 p-8 bg-[#293130] rounded shadow-md">
  <h2 class="text-2xl text-white font-bold mb-4">Sign Up</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-4">
      <label for="username" class="block text-white font-bold mb-2">Username</label>
      <input type="text" id="fullName" name="fullName" class="w-full border rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-blue-500" {...register("fullName")} required/>
    </div>
    <div class="mb-4">
      <label for="email" class="block text-white font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" class="w-full border rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-blue-500"{...register("email")} required />
    </div>
    <div class="mb-6">
      <label for="password" class="block text-white font-bold mb-2">Password</label>
      <input type="password" id="password" name="password" class="w-full border rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-blue-500" minLength="10" {...register("password")}required/>
    </div>
    <button type="submit" class= "bg-blue500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>

  </form>
</div>
    </div>
  );
}