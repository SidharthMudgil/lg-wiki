import React from "react";
import { useDispatch } from "react-redux";
import Auth from "../services/auth";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";

export default function Signup() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const userData = await Auth.createAccount(data);
      dispatch(login(userData));
      console.log("User created:", userData);
    } catch (error) {
      console.error("Error creating user account:", error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>



          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" {...register("fullName")} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" {...register("email")} />
       
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" autoComplete="current-password" {...register("password")} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}