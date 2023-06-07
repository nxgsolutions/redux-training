import React, { useEffect } from 'react'
import { GetUser } from '../userAction'

import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'

const Users = () => {

    const dispatch = useDispatch();

    const userData = useSelector((state) => state.users);
    const { loading, users, error } = userData;
    useEffect(()=>{
        dispatch(GetUser())
        console.log("UI Dispatch Called")
    },[])

    console.log("screen data",users)

  return (
    <div>
      <h1>Users</h1>

            {
              loading?"Fetching Data....": users?.data.map((user,index)=>(
                        <p>{user.name}</p>
                ))
            }

    </div>
  )
}

export default Users
