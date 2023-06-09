import React from 'react'
import { useEffect } from 'react'
const Home = (props) => {


    useEffect(()=>{
    
        console.log("HOme Useeffect")
    },[props.state])//
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
