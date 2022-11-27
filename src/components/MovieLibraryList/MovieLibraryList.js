import React from "react";
import {MovieLibraryItem} from "../MovieLibraryItem";

export const MovieLibraryList = ({ movies, loading, fetchCount }) => {
  return loading ? (
    <div className="movie-library__loading">
      <p>Loading...</p>
      <p>Fetched {fetchCount} times</p>
    </div>
  ) : (
    <ul className="movie-library__list">
      {movies.map((movie) => <MovieLibraryItem key={movie.id} movie={movie} />)}
    </ul>
  );
};
