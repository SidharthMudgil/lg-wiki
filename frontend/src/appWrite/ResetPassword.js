import React, { useState, useEffect } from "react";
import Auth from "./services/auth";
import { useSearchParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ResetPassword() {
  const [params] = useSearchParams();
  let userId = params.get("userId");
  let secret = params.get("secret");

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const resetPassword = async (data) => {
    try {
      if (userId && secret) {
        const userIdString = String(userId);
        const secretString = String(secret);

        const result = await Auth.recoverpass(
          userIdString,
          secretString,
          data.recoveryCode
        );

        setError("Password reset successfully");
        navigate("/login");
      } else {
        setError("Invalid token passed in the request.");
      }
    } catch (error) {
      setError("Error resetting password. Please try again.");
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="flex   p-20 text-white bg-[#121615]">
      <div
        className={`mx-auto  max-w-xl bg-[#293130] rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex ">
          {/* <span className="inline-block w-full max-w-[100px]">
                     
                    </span> */}
        </div>
        <h2 className=" text-2xl font-bold leading-tight mb-5">
          New Password
        </h2>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(resetPassword)}>


          <div className="flex flex-col gap-4">
            <input
              type="password"
              {...register("recoveryCode")}
              className="w-full border rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-blue-500"
              placeholder="New password"
            />

            <button
              type="submit"
              class="bg-blue500  text-left hover:bg-amber-400 hover:text-black text-white font-bold py-2 w-20 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
