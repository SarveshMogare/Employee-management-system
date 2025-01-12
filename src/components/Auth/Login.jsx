import React, { useState } from 'react'


const Login =({handleLogin})=>{



    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const submithandler=(e)=>{
        e.preventDefault()
         handleLogin(email,password)
         setemail("")
         setpassword("")
        
    }


  return(
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20' >
            <form   onSubmit={(e)=>{
                submithandler(e)
            }}          
            className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{
                    setemail(e.target.value)
                    
                }} required className=' text-white border-2 border-emerald-600 px-5 py-3 text-xl  outline-none bg-transparent placeholder:text-gray-400 rounded-full' type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e)=>{
                    setpassword(e.target.value)
                    
                }} required className='text-white border-2 border-emerald-600 px-5 py-3 text-xl  outline-none bg-transparent mt-3 placeholder:text-gray-400 rounded-full ' type="password" placeholder='Enter password' />
                <button className='mt-5 border-2 bg-emerald-600 px-5 py-3 text-xl text-white outline-none border-none placeholder:text-white rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}
export default Login;