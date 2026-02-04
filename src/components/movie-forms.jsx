import React,{useState} from "react";

import API from "../services/api-service";

export default function MovieForm({movie}){
    const [title,setTitle]=useState(movie.title)
    const [description,setDescription]=useState(movie.description)

    const saveMovie= ()=> {
        API.updateMovie(movie.id, {title, description});
    }

    return (
        <div className="form">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" placeholder="Title" value={title} onChange={(evt=>setTitle(evt.target.value))}/>
            <label htmlFor="description">Description</label>
            <textarea id="desciption" placeholder="Description" value={description} onChange={(evt=>setDescription(evt.target.value))}/>

            <button onClick={()=>saveMovie()}>UPDATE MOVIE</button>
        </div>
    )
}