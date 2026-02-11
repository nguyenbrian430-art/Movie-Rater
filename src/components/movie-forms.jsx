import React,{useState, useEffect} from "react";
import API from "../services/api-service";
import { useCookies } from "react-cookie";

export default function MovieForm({movie, updatedMovie, addNewMovie}){

    const [title,setTitle]=useState(movie.title)
    const [description,setDescription]=useState(movie.description)
    const [token] = useCookies("mr-token");

    useEffect( ()=>{
        setTitle(movie.title);
        setDescription(movie.description);
    },[movie])

    const saveMovie= async ()=> {
        const resp = await API.updateMovie(movie.id, {title, description}, token["mr-token"]);
        if(resp) updatedMovie(resp);
    }

    const createMovie= async ()=> {
        const resp = await API.createMovie({title, description},token["mr-token"]);
        if(resp) addNewMovie(resp);
    }

    return (
        <div className="form">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" placeholder="Title" value={title} onChange={(evt=>setTitle(evt.target.value))}/>
            <label htmlFor="description">Description</label>
            <textarea id="desciption" placeholder="Description" value={description} onChange={(evt=>setDescription(evt.target.value))}/>

            { movie.id ? 
                <button onClick={()=>saveMovie()}>UPDATE MOVIE</button> :
                <button onClick={()=>createMovie()}>CREATE MOVIE</button>
            }
        </div>
    )
}