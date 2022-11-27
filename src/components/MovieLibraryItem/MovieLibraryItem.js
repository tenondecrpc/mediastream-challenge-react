import React from "react";

export const MovieLibraryItem = ({ movie }) => {
  return (
    <li className="movie-library__card">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        onError={(error) => {
          error.target.onerror = null;
          error.target.src = "http://www.movienewz.com/img/films/poster-holder.jpg";
        }}
      />
      <ul>
        <li className="movie-library__card-title">{movie.title}</li>
        <li>{movie.genres.join(", ")}</li>
        <li>{movie.year}</li>
      </ul>
    </li>
  );
};
