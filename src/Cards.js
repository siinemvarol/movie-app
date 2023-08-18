import React from "react";

const Cards = ({movie}) => {
    return (
        <>
        <div className="card"> 
            <img src={movie.coverImage} alt={movie.name}/>
            <h3>{movie.name}</h3>
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
        </div>
        </>

    )
}

export default Cards;