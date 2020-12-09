import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import RemoveFromWatchList from '../components/buttons/removeFromWatchList';
import {MoviesContext} from '../contexts/moviesContext';

const WatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter( m => m.watchList )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Watch List"}
      action={movie => <RemoveFromWatchList movie={movie} />}
    />
  );
};

export default WatchListPage;