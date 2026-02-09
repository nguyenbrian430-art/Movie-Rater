import React, { useState, useEffect } from "react";
import { FaRegStar, FaS, FaStar } from "react-icons/fa6";
import API from "../services/api-service";

export default function MovieDetail({movie, updateMovie}) {

    const [highlighted,setHighlighted]= useState(-1);
    const [error, setError] = useState(null);
    
    const rateMovie = async (rate)=> {
      const rateMovie = async () =>{
        const resp = await API.rateMovie(movie.id,{stars: rate});
        if(resp) getNewMovie();
      }
      rateMovie();
    };

    const getNewMovie = async (rate)=> {
      const fetchMovies = async () =>{
            const resp = await API.getMovie(movie.id);
            if(resp) updateMovie(resp);
          }
          fetchMovies();
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
