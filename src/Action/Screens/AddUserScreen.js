import React, { useEffect } from 'react'
import { AddUser } from '../userAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { UpdateUser } from '../userAction'
const AddUserScreen = (props) => {
  const navigate = useNavigate();

  console.log("props.userbyid",props.userById);

  const [name, setName] = useState('')
  const dispatch =useDispatch();
  const usersData = useSelector((state) => state.usersData);
  const { loading, users, error,userById } = usersData;
  const postData ={ name:name }


  function postUser(){
    console.log("called")
    dispatch(AddUser(postData))
  }
  function updateUser(){
    console.log("called update")
    dispatch(UpdateUser({id:props.userById.id,name:name}))
  }
    useEffect(()=>{
      props.userById && setName(props.userById.name) 
    
    },[props.userById])
  return (
    <div>
        {/* <button onClick={() => navigate(-1)}>go back</button> */}
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br/>
    { props.userById ?  <button type="button" onClick={updateUser} >Update</button> 

     : <button type="button" onClick={postUser} >Save</button> }
        </div>
  )
}

export default AddUserScreen
