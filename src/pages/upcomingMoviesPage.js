import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToFavoritesButton from '../components/buttons/addToFavorites';

const UpcomingMoviesListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesListPage;