import React, { useEffect, useState } from 'react'
import axios from 'axios';

//fetch    //axios
const FetchApp = () => {

  const [users, setUsers] = useState();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

const Url="https://646c5e617b42c06c3b2b09cc.mockapi.io/users";


function getData()
{
  axios.get(Url).then((response) => {

    setUsers(response.data);
  });
}


function AddData()
{

  axios
      .post(Url, {
        name: title,
        avatar: ""
      })
      .then((response) => {
       setTitle("")
        console.log("Saved Successs")
      });

}
//delete , update/PUT
// mui, API, useeffect  ???? 

useEffect(()=>{
  console.log("useeffect")
  getData();
}, [title])

  return (
    <div>
        <form>
        <label>Name</label>

         <input value={title}onChange={(e)=>setTitle(e.target.value)}></input>
  
         <button type="button" onClick={()=>AddData()}>Save</button>
        </form>



      <h1>List of users</h1>
      <table>
        <tr>
          <th>ID</th><th>Title</th>
          {/* <th>Body</th> */}
        </tr>
        {
          users?.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              {/* <td>{user.body}</td> */}
          
            </tr>
          )).reverse()
        }
      </table>

   

    </div>
  )
}

export default FetchApp
