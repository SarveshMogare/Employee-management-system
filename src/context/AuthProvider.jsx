import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext =createContext()

const AuthProvider =({children})=>{
    // localStorage.clear()

    const[userData,setUserDate]=useState(null)

    useEffect(()=>{
        setLocalStorage()
        const {employees}=getLocalStorage()
        setUserDate(employees)

    },[])
    
    

  return(
    <AuthContext.Provider value={[userData,setUserDate]}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;