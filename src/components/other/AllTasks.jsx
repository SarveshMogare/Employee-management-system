import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';



const AllTasks =()=>{

    const [userData,setUserData]=useContext(AuthContext)

    

  return(
    <div className='bg-[#1c1c1c] mt-5 rounded p-5 h-auto '>
        <div className='bg-red-400 mb-2 flex justify-between rounded py-2 px-4'>
            <h2 className='w-1/5 '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
        </div>
        <div className='h-[80%] '>
        {userData.map(function(elem,idx){
            return <div key={idx} className='bg-transparent border-green-400 border-2 mb-2 flex justify-between rounded py-2 px-4'>
            <h2 className='w-1/5 '>{elem.firstName}</h2>
            <h5 className='w-1/5 text-yellow-400'>{elem.taskNumber.newTask}</h5>
            <h3 className='w-1/5 text-blue-600'>{elem.taskNumber.active}</h3>
            <h5 className='w-1/5 text-green-600'>{elem.taskNumber.completed}</h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskNumber.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}
export default AllTasks;