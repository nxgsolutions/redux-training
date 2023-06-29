import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AddUser } from './Action/userAction'
const UseRefDemo = () => {
const dispatch= useDispatch();
const myInput = useRef();
var myName="NXG";
function changeHandle()
{
   var myName= myInput.current.value

   console.log("name",myName);

   dispatch(AddUser({name:myName}))
}

  return (
    <div>
      <h1>Useref</h1>
    <p>{myName}</p>
    <input type="text"  ref={myInput}></input>
        <button onClick={changeHandle}>Change Color</button>
    </div>
  )
}

export default UseRefDemo
