import React, { useState, useEffect } from "react";
import { FaRegStar, FaS, FaStar } from "react-icons/fa6";

export default function MovieDetail({movie, updateMovie}) {

    const [highlighted,setHighlighted]= useState(-1);
    const [error, setError] = useState(null);
    
    const rateMovie = async (rate)=> {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Token 9b2715743b984db9f4b6ae67f0efdfab9b0a453e"
          },
          body: JSON.stringify({stars: rate})
        });
        if (!response.ok) {
          setError("Error setting rating");
          return;
        }
        const result = await response.json();
        setError("Successfully updated")
        getNewMovie();
      } catch {
        setError("Error setting rating");
      }
    };

    const getNewMovie = async (rate)=> {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Token 9b2715743b984db9f4b6ae67f0efdfab9b0a453e"
          }
        });
        if (!response.ok) {
          setError("Error setting movie");
          return;
        }
        const result = await response.json();
        updateMovie(result);
      } catch {
        setError("Error getting movies");
      }
    };


    return(
        <div>
            {movie && <div>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>  
                <div className="flex">   
                    <FaStar className={movie.avg_rating > 0 && "starFill"}/>
                    <FaStar className={movie.avg_rating > 1 && "starFill"}/>
                    <FaStar className={movie.avg_rating > 2 && "starFill"}/>
                    <FaStar className={movie.avg_rating > 3 && "starFill"}/>
                    <FaStar className={movie.avg_rating > 4 && "starFill"}/>
                    <p>({movie.no_of_ratings})</p>
                </div>
                <h1 className="movieRaterHeader"> Rate the Movie!</h1>
                <div className="flex stars">
                    {[...Array(5)].map( (el,indx)=>{
                        return <FaStar key={indx} className={highlighted > indx && "starRatingFill"}
                            onMouseEnter={()=> setHighlighted(indx+1)} 
                            onMouseLeave={() => setHighlighted(-1)}
                            onClick={()=> rateMovie(indx+1)}/>

                    })}
                </div>
                {error && <p>{error}</p>}
            </div>}
        </div>
  );
}
