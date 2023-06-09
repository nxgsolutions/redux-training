import React, { useEffect } from 'react'
import { AddUser, GetUser } from '../userAction'

import { useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Home from '../../Home'
import AddUserScreen from './AddUserScreen'

const Users = () => {

    const dispatch = useDispatch();

    const userData = useSelector((state) => state.users);
    const { loading, users, error } = userData;

   const [state, setstate] = useState(0)

    useEffect(()=>{
        dispatch(GetUser())
        console.log("first Useeffect")
    },[])// run only first time of no condition

    useEffect(()=>{
  
      console.log("Second Useeffect")
  },[state])//run every time ehen state changed

    console.log("screen data",users)

  return (
    <div>
      <AddUserScreen/>
      <h1>Users</h1>
            <button onClick={()=>setstate(state+1)}>Click me</button>
            <h2>state=={state}</h2>
            {
              loading?<CircularProgress />:error?"Network error": users?.map((user,index)=>(
                        <p>{user.name}</p>
                ))
            }
      <Home state={state}></Home>
    </div>
  )
}

export default Users
