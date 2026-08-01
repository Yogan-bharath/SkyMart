import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import { LuMail ,LuLock } from "react-icons/lu";
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();
  const { register , handleSubmit , reset , formState:{errors} } = useForm();
  const LoginHandle = (data)=>{
    const registerUsers = JSON.parse(localStorage.getItem("skyMartRegisterUsers")) || [];
    let user = registerUsers.find((user)=>data.email===user.email);
    if(!user){
      console.log("not found")
      toast.error("Invalid User or User Not Found")
      return;
    }else{
      if(user.password===data.password){
        localStorage.setItem("user",JSON.stringify(user));
        navigate("/home")
        toast.success("Login Successful")
        reset();
      }else{
        toast.error("Invalid Email or Password!")
      }
    }
  }
  return (
    <div className='bg-neutral-950 flex items-center justify-center w-full h-full'>
      
      <div className='bg-[#111111] border-neutral-700 w-full max-w-120 border lg:p-9 p-5 rounded-2xl flex flex-col gap-5'>
        <div>
          <h3 className='text-3xl'>Sign in</h3>
          <p className='lg:text-lg text-sm text-neutral-600'>Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit(LoginHandle)} className='flex flex-col gap-3'>
          <div className=' flex w-full items-center gap-2
    rounded-2xl border border-neutral-700
    px-5 py-3
    transition-all duration-300 ease-in-out
    hover:border-[var(--pr)]
    hover:ring-4 hover:ring-[color:rgb(99_102_241/0.15)]
    focus-within:border-[var(--pr)]
    focus-within:ring-4 focus-within:ring-[color:rgb(99_102_241/0.2)]'>
            <LuMail className=''/>
            <input {...register("email")} className='outline-none' type="email" placeholder='Email address'/>
          </div>
          <div className=' flex w-full items-center gap-2
    rounded-2xl border border-neutral-700
    px-5 py-3
    transition-all duration-300 ease-in-out
    hover:border-[var(--pr)]
    hover:ring-4 hover:ring-[color:rgb(99_102_241/0.15)]
    focus-within:border-[var(--pr)]
    focus-within:ring-4 focus-within:ring-[color:rgb(99_102_241/0.2)]'>
            <LuLock/>
            <input {...register("password")} className='outline-none' type="password" placeholder='Password'/>
          </div>

          <button type='submit' className='relative w-full border bg-[var(--pr)] text-black py-3 px-5 rounded-2xl'>
            <div className='text-lg flex justify-center items-center gap-3 '>
            <h3>Sign in </h3>
            <RiArrowRightLine/>
            </div>
          </button>

        </form>

        <p className='text-center text-sm flex items-center gap-2 justify-center'>Don't have an account? <span className='cursor-pointer text-[var(--pr)] font-medium'  onClick={()=>{navigate("/register")}} >Create One</span></p>
      </div>
    </div>
  )
}

export default Login