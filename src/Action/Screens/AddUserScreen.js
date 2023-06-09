import React from 'react'
import { AddUser } from '../userAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const AddUserScreen = () => {

  const [name, setName] = useState('')
  const dispatch =useDispatch();
 
  const postData ={ name:name }


  function postUser(){
    console.log("called")
    dispatch(AddUser(postData))
  }

  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br/>
      <button type="button" onClick={postUser} >Save DD</button> 
        </div>
  )
}

export default AddUserScreen
