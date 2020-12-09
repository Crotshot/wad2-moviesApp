import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const RemoveFromFavoritesButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavorites = e => {
    e.preventDefault();
    context.removeFromFavorites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRemoveFromFavorites}
    >
      Remove from Favorites
    </button>
  );
};

export default RemoveFromFavoritesButton;