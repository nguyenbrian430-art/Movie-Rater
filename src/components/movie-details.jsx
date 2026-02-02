import React, { useState, useEffect } from "react";
import { FaRegStar, FaS, FaStar } from "react-icons/fa6";

export default function MovieDetail({movie}) {
    


    return(
        <div>
            {movie && <div>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>     
                <FaRegStar /> <FaStar/>
            </div>}
        </div>
  );
}
