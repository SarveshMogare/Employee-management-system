import React, { createContext, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App =()=>{

  // useEffect(()=>{
  //   //  setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user,setUser]=useState(null)
  const [loggedInuserData,setLoggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  useEffect(()=>{
    const LoggedInUser=localStorage.getItem("LoggedInUser")
    
      if(LoggedInUser){
        const userData=JSON.parse(LoggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    },[]
  )
  

  const handleLogin =(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee=userData.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }else{
      alert('invalid credentials ')
    }
  }


  return(
    <>
    {!user?<Login handleLogin={handleLogin}/>:'' }
    {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user =='employee'? <EmployeeDashboard changeUser={setUser} data={loggedInuserData}/>:null) }
    {/* <AdminDashboard/> */}
    

      
    </>
  )
}
export default App;