import React, { useState, useEffect } from 'react';
import Auth from './services/auth';
import { useSearchParams } from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function ResetPassword() {
    const [params] = useSearchParams();
    let userId = params.get('userId');
    let secret = params.get('secret');
    
    const navigate = useNavigate()
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const resetPassword = async (data) => {
    try {
      if (userId && secret) {
        const userIdString = String(userId);
        const secretString = String(secret);

        const result = await Auth.recoverpass(userIdString, secretString, data.recoveryCode);
 
        setError('Password reset successfully');
        navigate("/admin")
      } else {
        setError('Invalid token passed in the request.');
      }
    } catch (error) {
      setError('Error resetting password. Please try again.');
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full p-20 bg-[#121615]">
      <form onSubmit={handleSubmit(resetPassword)}>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <h2 className="text-center text-2xl font-bold leading-tight">Change Password for LG-WIKI</h2>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          <div className="flex flex-col gap-4">
            <input
              type="password"
              {...register('recoveryCode')}
              className="p-5"
              placeholder="Enter your new password"
            />
            <button
              type="submit"
              className="w-full text-xl p-5 font-semibold rounded-full hover:text-[#f5a942] hover:bg-[#1e2524]"
            >
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
