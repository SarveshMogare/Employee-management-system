import React, { useState } from 'react'

const Header =(props)=>{

  // const [username,setuserName]=useState('')
  // if(!data){
  //   setuserName('admin')
  // }else{
  //   setuserName(data.firstName)
  // }

  const logOutUser=()=>{
    localStorage.setItem('LoggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
    return(
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>hello <br/><span className='text-3xl font-semibold'>Sarvesh👋</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
      </div>
    )
  }
  export default Header;