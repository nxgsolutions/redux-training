import logo from './logo.svg';
import './App.css';
import FetchApp from './fetchApp';
import Users from './Action/Screens/Users';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WebsocketDemo from './WebsocketDemo';
import AddUserScreen from './Action/Screens/AddUserScreen';
function App() {


  const userData = useSelector((state) => state.users);

  
useEffect(()=>{
    console.log("App Component")
},[])

  return (
    <div >
          <h1>My APP</h1>
          {/* <FetchApp /> */}
  <BrowserRouter>
  
  <Routes>
    <Route path="/users"  element={<Users></Users>}></Route>
    <Route path="/home"  element={<Home></Home>}></Route>
    <Route path="/websocket"  element={<WebsocketDemo></WebsocketDemo>}></Route>
    <Route path="/add-user"  element={<AddUserScreen />}></Route>

  </Routes>
  
  </BrowserRouter>
         
     
    </div>
  );
}

export default App;
