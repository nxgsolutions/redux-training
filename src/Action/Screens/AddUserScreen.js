import React, { useEffect } from 'react'
import { AddUser } from '../userAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { UpdateUser } from '../userAction'
import { useForm } from 'react-hook-form'
import './AddUserScreen.css'
const AddUserScreen = (props) => {
//
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
} = useForm();


  const navigate = useNavigate();

  console.log("props.userbyid",props.userById);

  const [name, setName] = useState('')
  const [studentClass, setStudentClass] = useState('')

  const dispatch =useDispatch();
  const usersData = useSelector((state) => state.usersData);
  const { loading, users, error,userById } = usersData;
  

  function postUser(){
    console.log("called")

    const postData ={ name: getValues("name") }

    dispatch(AddUser(postData))
    
  }
  function updateUser(){
    console.log("called update")
    dispatch(UpdateUser({id:props.userById.id,name:name}))
  }
    useEffect(()=>{
      props.userById && setName(props.userById.name) 
    
    },[props.userById])

    console.log("errors",errors)
  return (
    <div className='input-form'>
      <form onSubmit={handleSubmit(postUser)}>
        {/* <button onClick={() => navigate(-1)}>go back</button> */}
        {/* <p>Name</p> */}
      <input className='input-item' type="text" {...register("name",{ required:"*Name is Required ", minLength: {  value:3, message:"please enter minimum 3 charecter"}   }  )} placeholder='Enter name'  />
      <br/>
      <small>{errors?.name?.message}</small>
     
      {/* <p>Class</p> */}
      <input className='input-item' type="text"  {...register("class",{required:"  *Class is Required", pattern:{ value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:"invalid Email" }})}  placeholder='Enter Class'  />
      <br/>
      <small>{errors?.class?.message}</small>
      <br/>
    { props.userById ?  <button type="submit" >Update</button> 

     : <button className='btn' type="submit" >Save</button> }
     </form>
        </div>
  )
}

export default AddUserScreen
