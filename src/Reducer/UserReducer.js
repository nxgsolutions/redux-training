import React from 'react'
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL, ADD_USER_SUCCESS, ADD_USER_REQUEST, ADD_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, GET_USER_ID_REQUEST, GET_USER_ID_SUCCESS, GET_USER_ID_FAIL, GET_USER_ID_RESET, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from '../Constants/userConstant'

export const UserReducer = (state = { users: [], userById: [], showMessage: "", deletedMessage: "", updatedMessage: "" }, action) => {

    console.log("Reducer data", action.payload)

    switch (action.type) {
        case GET_USER_REQUEST:
            return { getLoading: true }
        case GET_USER_SUCCESS:
            return { ...state, getLoading: false, users: action.payload }
        case GET_USER_FAIL:
            return { getLoading: false, error: action.payload }

        case ADD_USER_REQUEST:
            return { ...state, loading: true, showMessage: false }
        case ADD_USER_SUCCESS:
            console.log("add state.users", state.users)
            return { ...state, loading: false, users: [...state.users, action.payload], showMessage: true }
        case ADD_USER_FAIL:
            return { loading: false, error: action.payload }

        case DELETE_USER_REQUEST:
            return { ...state, loading: true, deletedMessage: false }
        case DELETE_USER_SUCCESS:
            console.log("state.users", state.users)
            return { ...state, loading: false, users: state.users.filter(user => user.id != action.payload.data.id), deletedMessage: true }
        case DELETE_USER_FAIL:
            return { loading: false, error: action.payload }
        // case GET_USER_REQUEST:
        //     return {loading:true}


        case GET_USER_ID_REQUEST:
            return { ...state, loading: true, userById: [] }
        case GET_USER_ID_SUCCESS:
            console.log("get by id =====", state.users)
            return { ...state, loading: false, userById: state.users.find((x) => x.id === action.payload)}

        case GET_USER_ID_FAIL:
            return { ...state, loading: false, error: action.payload }


        case UPDATE_USER_REQUEST:
            return { ...state,loading:true,userById:[],updatedMessage:false }   
        case UPDATE_USER_SUCCESS:
            return { ...state, loading: false, users: state.users.map(user => user.id === action.payload.id ? action.payload : user),updatedMessage:true, userById:false }
        case UPDATE_USER_FAIL:
            return { ...state,loading:false,error:action.payload,updatedMessage:false}   
        // case GET_USER_ID_RESET:
        //     return { ...state, loading: false, userById:false }
            // return { ...state, loading: false, users: state.users.map(user => user.id === action.payload.id ? userById:false)}
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


