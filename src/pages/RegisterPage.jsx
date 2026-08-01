import React from 'react'
import { LuLock, LuMail , LuUser } from 'react-icons/lu'
import { RiArrowRightLine, RiFlashlightFill } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { useForm, Watch } from 'react-hook-form'
import { toast } from 'react-toastify'
const RegisterPage = () => {
    const navigate = useNavigate();
    const { register , handleSubmit , reset , formState:{errors} } = useForm();
    const registerHandler = (data)=>{
      data.id = Date.now();
      if(data.password!=data.confirmPassword){
        toast.error("Confirm Password not matched")
        return;
      }
      const registerUsers = JSON.parse(localStorage.getItem("skyMartRegisterUsers")) || [];
      let user = registerUsers.find((user)=>data.email===user.email);
      if(user){
        toast.error("Email Already Exists")
        return
      }
      registerUsers.push(data)
      localStorage.setItem("skyMartRegisterUsers",JSON.stringify(registerUsers));
      reset()
      navigate("/")
      toast.success("User Created Successfully")
    } 
    return (
    <div className='h-full w-full text-white '>
        <div className='max-w-130 m-auto p-2 flex flex-col gap-5'>
            <div className='flex items-center justify-center'>
                <div className='flex gap-2 items-center'>
                    <RiFlashlightFill className='bg-[var(--pr)] p-3 text-5xl rounded-[15px] text-black'/>
                    <h2 className='text-2xl font-medium tracking-[2px]'>Sky<span className='text-[var(--pr)]'>Mart</span></h2>
                </div>
            </div>
            <div className='bg-[#111111] border-neutral-700 w-full border lg:p-9 p-5 rounded-2xl flex flex-col gap-5'>
                <div>
                <h3 className='text-xl lg:text-3xl font-semibold'>Create account</h3>
                <p className='text-[1rem] lg:text-[1.2rem]  text-neutral-600'>Join SkyMart and start shopping</p>
                </div>


                <form onSubmit={handleSubmit(registerHandler)} className='flex flex-col gap-3'>
                    <div  className=' flex w-full items-center gap-2
                    rounded-2xl border border-neutral-700
                    px-5 py-3
                    transition-all duration-300 ease-in-out
                    hover:border-[var(--pr)]
                    hover:ring-4 hover:ring-[color:rgb(99_102_241/0.15)]
                    focus-within:border-[var(--pr)]
                    focus-within:ring-4 focus-within:ring-[color:rgb(99_102_241/0.2)]'>
                            <LuUser className=''/>
                            <input {...register("fullName",{
                              required:true
                            })} className='outline-none  w-full bg-transparent' type="text" placeholder='Full name'/>
                          </div>
                          <div className=' flex w-full items-center gap-2
                    rounded-2xl border border-neutral-700
                    px-5 py-3
                    transition-all duration-300 ease-in-out
                    hover:border-[var(--pr)]
                    hover:ring-4 hover:ring-[color:rgb(99_102_241/0.15)]
                    focus-within:border-[var(--pr)]
                    focus-within:ring-4 focus-within:ring-[color:rgb(99_102_241/0.2)]'>
                            <LuMail className=''/>
                            <input {...register("email")} className='outline-none w-full bg-transparent' type="email" placeholder='Email address'/>
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
                            <input {...register("password",{
                              required:true,
                              minLength:{value:6,message:"Passwrod min 6 length"}
                            })} className='outline-none w-full' type="password" placeholder='Password (min 6 chars)'/>
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
                            <input  {...register("confirmPassword",{
                              required:true,
                              minLength:{value:6,message:"Password must be at least 6 characters long"},
                            })} className='outline-none w-full' type="password" placeholder='Confirm Password'/>
                          </div>
                          {
                            errors.confirmPassword && (<p className='text-red-400'>{errors.confirmPassword.message}</p>)
                          }
                          <button type='submit' className='relative w-full border bg-[var(--pr)] text-black py-3 px-5 rounded-2xl'>
                            <div className='text-lg flex justify-center items-center gap-3 '>
                            <h3 className='text-lg font-semibold'>Create Account </h3>
                            <RiArrowRightLine/>
                            </div>
                          </button>
                
                        </form>
                    
                    <p className='text-center text-sm flex items-center gap-2 justify-center'>Already have an account? <span className='cursor-pointer text-[var(--pr)] font-medium' onClick={()=>{navigate("/")}}>Sign in</span></p>
            </div>
        
        </div>

    </div>
  )
}

export default RegisterPage