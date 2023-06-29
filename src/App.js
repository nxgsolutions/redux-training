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
import UseRefDemo from './useRefDemo';
function App() {


  const userData = useSelector((state) => state.users);

  
useEffect(()=>{
    console.log("App Component")
},[])
// var CryptoJS = require("crypto-js");
// // var AES = require("crypto-js/aes");
// // Encrypt
// var ciphertext = CryptoJS.AES.encrypt('hello world', '82a645babc5cd41c9a2cb4d0d3ba17ad',{mode: CryptoJS.mode.CBC}).toString();

// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, '82a645babc5cd41c9a2cb4d0d3ba17ad');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
//----------------------------------------------------------
// const crypto = require("crypto");
// var encryptionMethod = "AES-256-CBC";
// var secret = "82a645babc5cd41c9a2cb4d0d3ba17ad"; //must be 32 char length
// var iv = secret.substr(0, 16);
// const encrypt = (plain_text, encryptionMethod, secret, iv) => {
//   var encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
//   return (
//     encryptor.update(plain_text, "utf8", "base64") + encryptor.final("base64")
//   );
// };

// ciphertext= encrypt("Hello world",encryptionMethod,secret,iv)
// console.log("ciphertext==",ciphertext);
// console.log("originalText==",originalText);
  return (
    <div className='App' >
          <h1>My APP</h1>
          {/* <FetchApp /> */}
  <BrowserRouter>
  
  <Routes>
    <Route path="/users"  element={<Users></Users>}></Route>
    <Route path="/home"  element={<Home></Home>}></Route>
    <Route path="/websocket"  element={<WebsocketDemo></WebsocketDemo>}></Route>
    <Route path="/add-user"  element={<AddUserScreen />}></Route>
    <Route path="useref" element={<UseRefDemo/>}></Route>

  </Routes>
  
  </BrowserRouter>
         
     
    </div>
  );
}

export default App;
