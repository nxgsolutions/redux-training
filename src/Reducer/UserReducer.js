import React from 'react'
import { GET_USER_REQUEST, GET_USER_SUCCESS,GET_USER_FAIL,ADD_USER_SUCCESS,ADD_USER_REQUEST,ADD_USER_FAIL } from '../Constants/userConstant'

export const UserReducer = (state={users:[]}, action) => {

    console.log("Reducer data",action.payload)

    switch (action.type) {
        case GET_USER_REQUEST:
            return {loading:true}
        case GET_USER_SUCCESS:
            return {loading:false,users:action.payload.data}
        case GET_USER_FAIL:
            return {loading:false,error:action.payload}
        case ADD_USER_REQUEST:
            return{  loading:true}  
        case ADD_USER_SUCCESS:
            return{  loading:false,users: [...state.users,action.payload.data]}    
        case ADD_USER_FAIL:
            return{  loading:false, error:action.payload}    
     default:
            return state;

    }



    // switch (action.type) {
    //     case ORDER_CREATE_REQUEST:
    //         return {loading: true};
    //     case ORDER_CREATE_SUCCESS:
    //         return {loading: false, success: true, order: action.payload};
    //     case ORDER_CREATE_FAIL:
    //         return {loading: false, error: "Something Went Wrong!"};
    //     case ORDER_CREATE_RESET:
    //         return {success: false};
    //     case ORDER_CASHFREE_SUCCESS:
    //     return { cashfreeSuccess : true, sessionData: action.payload}   
    //     default:
    //         return state;
    // }

}


