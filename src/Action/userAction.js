import React from 'react'
import { GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL,ADD_USER_REQUEST,ADD_USER_SUCCESS,ADD_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL} from '../Constants/userConstant';
import axios from 'axios';

export const GetUser = () => async(dispatch)=>{

    dispatch({ type:GET_USER_REQUEST,payload:{}})

    try{

    const  response = await axios.get(process.env.REACT_APP_API_URL+`/user`);

    dispatch({ type:GET_USER_SUCCESS,payload:response.data})
    console.log("Action data",response)

    }
    catch(error)
    {
        dispatch({ type:GET_USER_FAIL,payload:"Network Error!!"})
    }
}
export const AddUser = (postData) => async(dispatch)=>{
    
    dispatch({ type:ADD_USER_REQUEST,payload:{}})

    try{
        const  response = await axios.post(process.env.REACT_APP_API_URL+`/user`,postData);
       // console.log("post action",data.data)
        dispatch({ type:ADD_USER_SUCCESS,payload:response.data})

    }
    catch(error)
    {
        dispatch({ type:ADD_USER_FAIL,payload:error})
    }
 


}

export const DeleteUser = (id) =>async(dispatch) =>{
    
    dispatch({ type:DELETE_USER_REQUEST,payload:{}})

    try{
        const  response = await axios.delete(process.env.REACT_APP_API_URL+`/user/`+id);
     //   console.log("post action",data.data)
        dispatch({ type:DELETE_USER_SUCCESS,payload:response})

    }
    catch(error)
    {
        dispatch({ type:DELETE_USER_FAIL,payload:error})
    }


}



export const UpdateUser = (postData) => async(dispatch)=>{
    
  
    dispatch({ type:UPDATE_USER_REQUEST,payload:{}})

    try{
        const  response = await axios.put(process.env.REACT_APP_API_URL+`/user/`+postData.id,postData);
       // console.log("post action",data.data)
        dispatch({ type:UPDATE_USER_SUCCESS,payload:response.data})

    }
    catch(error)
    {
        dispatch({ type:UPDATE_USER_FAIL,payload:error})
    }
 



}


