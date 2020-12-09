import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

const MovieList = ({movies, action0, action1}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action0={action0} action1={action1}/>
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default MovieList;