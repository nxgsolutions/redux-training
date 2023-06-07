import React from 'react'
import { GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL } from '../Constants/userConstant';
import axios from 'axios';
export const GetUser = () => async(dispatch)=>{

    dispatch({ type:GET_USER_REQUEST,payload:{}})

    try{

    const  data = await axios.get(`https://647d90c8af9847108549df8d.mockapi.io/users`);

    dispatch({ type:GET_USER_SUCCESS,payload:data})
    console.log("Action data",data)

    }
    catch(error)
    {
        dispatch({ type:GET_USER_FAIL,payload:"Network Error!!"})
    }
}


export const AddUser = () => {
    
 


}

export const DeleteUser = () => {
    
 


}


export const UpdateUser = () => {
    
 


}


