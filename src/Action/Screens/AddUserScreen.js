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
  const [Image, setImage] = useState('')
  const [studentClass, setStudentClass] = useState('')

  const dispatch =useDispatch();
  const usersData = useSelector((state) => state.usersData);
  const { loading, users, error,userById } = usersData;
  

  function postUser(){
    console.log("called")
   let  values= getValues()
   console.log("values",values.image[0])
    const postData ={ name: getValues("name"), address:"test",class:"10th", image: values.image[0] }

    dispatch(AddUser(postData))
    
  }
  function updateUser(){
    console.log("called update")
    dispatch(UpdateUser({id:props.userById.id,name:name}))
  }

  const handleImage = (e) => {
    // const originalimage = e.target.files[0];
    // console.log("image===", originalimage);
    setImage(e.target.files[0]);
    // const kbSize=originalimage?.size/1024
    // if(kbSize>600){
    //   setDesktopBannerSizeError("Image can't be greater than 600KB!")
    // }else{
    //   setDesktopBannerSizeError("")
    // }

    // props.setInput({ ...props.input, Image: e.target.value })
  };



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
      <input type='file' {...register("image", {
                                required: true,
                              })} onChange={(e)=>handleImage(e)}></input>


    { props.userById ?  <button type="submit" >Update</button> 

     : <button className='btn' type="submit" >Save</button> }
     </form>
        </div>
  )
}

export default AddUserScreen
