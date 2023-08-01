import { useRef } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { LoginUser } from "../userAction"
export default function LoginScreen() {
    const userRef = useRef()
    const passwordRef = useRef()
    const dispatch =useDispatch()
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("runnn");
        let username = userRef.current.value;
        let password =  passwordRef.current.value;

        dispatch(LoginUser({"email":username,"password":btoa(password)}))
        //POST
        //url=== https://tanchhui-api.nxgecom.in/api/login
        //payload=== {"email":"dhirajsahu4696@gmail.com","password":"MTExMTExMTEx"}
        //successresponse=== {
        //     "response": true,
        //     "_id": "20",
        //     "name": "Dhiraj",
        //     "email": "dhirajsahu4696@gmail.com",
        //     "mobile": "9878767869",
        //     "currency": "$",
        //     "currencyCode": "USD",
        //     "isAdmin": false,
        //     "token": 32444142
        // }
        // fail response== {"response":false,"error":"Invalid credentials!"}
       
    }
    return (
        <div>
            <form METHOD="POST">
                <label>Usernam:</label><input type="text" ref={userRef} name="username" />
                <br />
                <label>Password:</label><input type="password" ref={passwordRef} name="username" />
                <br />
                <button type="button" onClick={(e) => handleLogin(e)} >LOGIN </button>
            </form>
        </div>
    )
}