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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Users = () => {

  const dispatch = useDispatch();
 
  const [open, setOpen] = React.useState(false);

  const [errorOpen, setErrorOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const usersData = useSelector((state) => state.usersData);
  const { getLoading,loading, users, error, userById,showMessage } = usersData;

  const [state, setstate] = useState(0)
  console.log("userById", userById)
  
  useEffect(() => {
    dispatch(GetUser())
    console.log("first Useeffect")
   
  }, [])// run only first time of no condition
  
  useEffect(() => { 
    showMessage &&  setOpen(true);
    console.log("Second Useeffect",open)

    error && setErrorOpen(true)
  }, [showMessage])//run every time when state changed



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
        {
           showMessage &&  <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
             Data Added Successfully!
           </Alert>
         </Snackbar> 
 
        }
     {error &&  <Snackbar open={errorOpen} autoHideDuration={2000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
             {error}
           </Alert>
         </Snackbar>  }
      <AddUserScreen userById={userById ? userById : false} />
      <h1>Users</h1>
      <button onClick={() => setstate(state + 1)}>Click me</button>
      <h2>state=={state}</h2>
      {
        getLoading ? <CircularProgress /> : error ? "Network error" : users?.map((user, index) => (
          <p>{user.name.toUpperCase()} <button onClick={() => handleEdit(user.id)}>Edit</button>  <button onClick={(e) => handleDelete(user.id)}>Delete</button>  </p>
        )).reverse()
      }
      <Home state={state}></Home>
    </div>
  )
}

export default Users
