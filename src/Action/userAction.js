import React from 'react'
import { GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL,ADD_USER_REQUEST,ADD_USER_SUCCESS,ADD_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../Constants/userConstant';
import axios from 'axios';
export const GetUser = () => async(dispatch)=>{

    dispatch({ type:GET_USER_REQUEST,payload:{}})

    try{

    const  data = await axios.get(`https://647d90c8af9847108549df8d.mockapi.io/users`);

    dispatch({ type:GET_USER_SUCCESS,payload:data.data})
    console.log("Action data",data)

    }
    catch(error)
    {
        dispatch({ type:GET_USER_FAIL,payload:"Network Error!!"})
    }
}


export const AddUser = (postData) => async(dispatch)=>{
    
    dispatch({ type:ADD_USER_REQUEST,payload:{}})

    try{
        const  data = await axios.post(`https://647d90c8af9847108549df8d.mockapi.io/users`,postData);
        console.log("post action",data.data)
        dispatch({ type:ADD_USER_SUCCESS,payload:{name:data.data.name,id:data.data.id}})

    }
    catch(error)
    {
        dispatch({ type:ADD_USER_FAIL,payload:error})
    }
 


}

export const DeleteUser = (id) =>async(dispatch) =>{
    
    dispatch({ type:DELETE_USER_REQUEST,payload:{}})

    try{
        const  data = await axios.delete(`https://647d90c8af9847108549df8d.mockapi.io/users/`+id);
        console.log("post action",data.data)
        dispatch({ type:DELETE_USER_SUCCESS,payload:data})

    }
    catch(error)
    {
        dispatch({ type:DELETE_USER_FAIL,payload:error})
    }


}


export const UpdateUser = () => {
    
 


}


