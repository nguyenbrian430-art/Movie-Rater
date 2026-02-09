import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import API from "../services/api-service";


export default function MovieList({movieClicked, updatedMovie, newMovie}) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setMovies([...movies,newMovie]);
  }, [newMovie])

  useEffect(()=>{
    const updatedMovies = movies.map(movie =>
      movie.id === updatedMovie.id ? {...updatedMovie} : movie
    );
    setMovies(updatedMovies);
  }, [updatedMovie])

  useEffect(() => {
    const fetchListOfMovies = async () =>{
      const resp = await API.fetchMovie();
      if(resp) setMovies(resp);
    }
    fetchListOfMovies();
  }, []);


  const removeMovie = (movieToBeRemoved) =>{
    const resp = API.removeMovie(movieToBeRemoved.id);
    if(resp){
      const newMovies = movies.filter(movie =>
      movie.id ===movieToBeRemoved.id ? false : true
    );
    setMovies(newMovies);
    }
  }

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="movieListIcons">
            <h2 className="eachMovieName" 
            onClick={(evt)=>{
              movieClicked(movie, false)
            }}>{movie.title}</h2>
            <FaEdit className="icons" onClick={(evt)=>{movieClicked(movie, true)}}/>
            <MdDelete className="icons" onClick={(evt)=>{removeMovie(movie)}}/>
          </div>
        );
      })}
    </div>
  );
}
