import * as React from 'react';
import { useEffect } from 'react'
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
import { Navigate, redirect } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Users = () => {

  const dispatch = useDispatch();
 
  const [open, setOpen] = React.useState(false);

  const [errorOpen, setErrorOpen] = React.useState(false);
 const userInfo = JSON.parse(localStorage.getItem("userInfo"));
 console.log("userInfo",userInfo);
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
  const logOutHandle = ()=>{
    localStorage.removeItem("userInfo")
    redirect("/login")
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
         <h1>welcome {userInfo?.name}</h1>
         <button onClick={()=>logOutHandle()}>LOGOUT</button>
      <AddUserScreen userById={userById ? userById : false} />
      <h1>Users</h1>
      {/* <button onClick={() => setstate(state + 1)}>Click me</button>
      <h2>state=={state}</h2> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{backgroundColor:"#b897c5ba"}}>
          <TableRow>
             
            <TableCell align="right">Name</TableCell>
            <TableCell>Edit /  Delete</TableCell>
             
             
          </TableRow>
        </TableHead>
        <TableBody>
        {
        getLoading ? <CircularProgress /> : error ? "Network error" : users?.map((user, index) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{user.name.toUpperCase()}</TableCell>
              <Stack direction="row" spacing={2}>
      <Button color="secondary" onClick={() => handleEdit(user.id)}><EditIcon/></Button>
      <Button color="secondary"onClick={(e) => handleDelete(user.id)}><DeleteIcon/></Button>
       
    </Stack>
              {/* <TableCell align="right">{user. class}</TableCell> */}
        
            </TableRow>
          )).reverse()
          }
        </TableBody>
      </Table>
    </TableContainer>

      {/* {
        getLoading ? <CircularProgress /> : error ? "Network error" : users?.map((user, index) => (
          <p>{user.name.toUpperCase()} <button onClick={() => handleEdit(user.id)}>Edit</button>  <button onClick={(e) => handleDelete(user.id)}>Delete</button>  </p>
        )).reverse()
      } */}
      {/* <Home state={state}></Home> */}
    </div>
  )
}

export default Users
