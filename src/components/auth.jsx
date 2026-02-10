import React, {useState, useContext, useEffect} from "react";
import API from "../services/api-service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
//import {TokenContext} from "../index";

export default function Auth(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [token,setToken] = useCookies("mr-token");
    const navigate = useNavigate();

    useEffect(()=>{
        //console.log("token", token["mr-token"]);
        if(token["mr-token"]) navigate('/movies');
    },[token])

    const loginUser = () => {
        const getToken = async () =>{
            const resp = await API.loginUser({username,password});
            if(resp) setToken("mr-token",resp.token);
        }
        
        getToken();
    }

    return(
        <div className="form">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Username" value={username} onChange={(evt=>setUsername(evt.target.value))}/>

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="password" value={password} onChange={(evt=>setPassword(evt.target.value))}/>

            <button onClick={()=>loginUser()}>Login</button>
            
        </div>
    )
}