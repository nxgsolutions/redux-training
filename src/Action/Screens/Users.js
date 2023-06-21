import React, { useEffect } from 'react'
import { AddUser, GetUser } from '../userAction'
import { GET_USER_ID_SUCCESS, GET_USER_ID_RESET } from '../../Constants/userConstant';
import { useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Home from '../../Home'
import AddUserScreen from './AddUserScreen'
import { DeleteUser } from '../userAction';
import { GetUserByID } from '../userAction';
import { Navigate } from 'react-router-dom';
const Users = () => {

  const dispatch = useDispatch();

  const usersData = useSelector((state) => state.usersData);
  const { loading, users, error, userById } = usersData;

  const [state, setstate] = useState(0)
  console.log("userById", userById)
  useEffect(() => {
    dispatch(GetUser())
    console.log("first Useeffect")

  }, [])// run only first time of no condition

  useEffect(() => {

    console.log("Second Useeffect")
  }, [state])//run every time ehen state changed



  console.log("screen data", userById)

  const handleDelete = (id) => {
    dispatch(DeleteUser(id));
  }
  const handleEdit = (id) => {
    //console.log("id===",id)
    dispatch({ type: GET_USER_ID_SUCCESS, payload: id })

  }
  return (

    <div>

      {/* {
     
   userById?.id>0 && <Navigate to={"/add-user?id="+userById?.id} replace={true} ></Navigate>
   
   } */}
      <AddUserScreen userById={userById ? userById : false} />
      <h1>Users</h1>
      <button onClick={() => setstate(state + 1)}>Click me</button>
      <h2>state=={state}</h2>
      {
        loading ? <CircularProgress /> : error ? "Network error" : users?.map((user, index) => (
          <p>{user.name} <button onClick={() => handleEdit(user.id)}>Edit</button>  <button onClick={(e) => handleDelete(user.id)}>Delete</button>  </p>
        )).reverse()
      }
      <Home state={state}></Home>
    </div>
  )
}

export default Users
