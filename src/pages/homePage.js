import React, { useContext } from "react";
import {MovieListPageTemplateDouble} from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import AddReviewButton from '../components/buttons/addReview';

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {
    return !("favorite" in m);
  });

  return (
    <MovieListPageTemplateDouble
      title="No. Movies"
      movies={movies}
      action0={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
      action1={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default MovieListPage;