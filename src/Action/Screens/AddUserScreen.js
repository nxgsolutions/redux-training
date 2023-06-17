import React, { useEffect } from 'react'
import { AddUser } from '../userAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const AddUserScreen = (props) => {

  console.log("props.userbyid",props.userById);

  const [name, setName] = useState('')
  const dispatch =useDispatch();
 
  const postData ={ name:name }


  function postUser(){
    console.log("called")
    dispatch(AddUser(postData))
  }

    useEffect(()=>{
      props.userById && setName(props.userById.name) 
    },[props.userById])
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br/>
    { props.userById ?  <button type="button" onClick={postUser} >Update</button> 

     : <button type="button" onClick={postUser} >Save</button> }
        </div>
  )
}

export default AddUserScreen
