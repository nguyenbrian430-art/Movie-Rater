import React, { useState, useEffect } from "react";
import { FaRegStar, FaS, FaStar } from "react-icons/fa6";

export default function MovieDetail({movie}) {

    const [highlighted,setHighlighted]= useState(-1);
    


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
                <h1> Rate the Movie!</h1>
                <div className="flex">
                    {[...Array(5)].map( (el,indx)=>{
                        return <FaStar className={highlighted > indx && "starRatingFill"}
                            onMouseEnter={()=> setHighlighted(indx+1)} 
                            onMouseLeave={() => setHighlighted(-1)}/>
                    })}
                </div>
            </div>}
        </div>
  );
}
