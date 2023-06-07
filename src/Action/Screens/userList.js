import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetUser } from '../userAction'
import { useSelector } from 'react-redux'
const userList = () => {
    const userData = useSelector((state) => state.users);
    const { loading, users, error } = userData;
    // useEffect(()={
              
    // },[])

  return (
    <div>
    <h1>Users List</h1>

          {
            loading?"Fetching Data....": users?.data.map((user,index)=>(
                      <p>{user.name}</p>
              ))
          }

  </div>
  )
}

export default userList
