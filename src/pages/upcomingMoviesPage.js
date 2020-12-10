import React, { useContext } from "react";
import {MovieListPageTemplateSingle} from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToWatchListButton from '../components/buttons/addToWatchList';

const UpcomingMoviesListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {
    return m.watchList === false || !("watchList" in m);
  });

  return (
    <MovieListPageTemplateSingle
      title="No. Upcoming Movies"
      movies={upcoming}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesListPage;