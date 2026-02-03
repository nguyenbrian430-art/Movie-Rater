import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function MovieList({movieClicked, editMovie}) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/movies/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Token 9b2715743b984db9f4b6ae67f0efdfab9b0a453e"
          },
        });
        if (!response.ok) {
          setError("Error getting movies");
          return;
        }
        const result = await response.json();
        setMovies(result);
      } catch {
        setError("Error getting movies");
      }
    };
    fetchMovies();
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <h2 className="eachMovieName" 
            onClick={(evt)=>{
              movieClicked(movie)
            }}>{movie.title}</h2>
            <FaEdit onClick={(evt)=>{editMovie(movie)}}/>
            <MdDelete />
          </div>
        );
      })}
    </div>
  );
}
