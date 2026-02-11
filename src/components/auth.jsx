import React, {useState, useContext, useEffect} from "react";
import API from "../services/api-service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
//import {TokenContext} from "../index";

export default function Auth(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoginView, setIsLoginView] = useState(true);

    const [token,setToken] = useCookies("mr-token");
    const navigate = useNavigate();

    useEffect(()=>{
        //console.log("token", token["mr-token"]);
        if(token["mr-token"]) navigate('/movies');
    },[token])

    const loginUser = () => {
        const getToken = async () =>{
            const resp = await API.loginUser({username,password});
            if(resp) {
                setToken("mr-token",resp.token);
                navigate("/movies");
            };
        }
        getToken();
    }

    const registerUser = () => {
        const register = async () =>{
            const resp = await API.registerUser({username,password});
            if(resp) loginUser();
        }
        register();
    }

    return(
        <div className="loginScreen"> 
            {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
            <div className="form">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Username" value={username} onChange={(evt=>setUsername(evt.target.value))}/>

                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="password" value={password} onChange={(evt=>setPassword(evt.target.value))}/>

                {isLoginView ?
                <button onClick={()=>loginUser()}>Login</button> :
                <button onClick={()=>registerUser()}>Register</button>
                }
                
            </div>
            {isLoginView ?
                <p onClick={()=> setIsLoginView(false)}>You don't have an account? Register here</p> :
                <p onClick={()=> setIsLoginView(true)}>Already have an account? Login here</p>
            }
        </div>
    )
}