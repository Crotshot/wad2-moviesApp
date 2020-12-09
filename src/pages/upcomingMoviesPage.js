import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToWatchListButton from '../components/buttons/addToWatchList';

const UpcomingMoviesListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {
    return !("watchList" in m);
  });

  return (
    <PageTemplate
      title="No. Upcoming Movies"
      movies={upcoming}
      action0={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
      action1={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesListPage;