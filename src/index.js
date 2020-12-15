import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedPage';
import MoviesContextProvider from "./contexts/moviesContext";
import SimilarContextProvider from "./contexts/similarContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import WatchListPage from "./pages/watchListPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  //document.body.style = 'background: black;';
  return (
   <BrowserRouter>
      <div className="jumbotron  bg-dark">
        <SiteHeader /> 
        <div className="container-fluid  bg-secondry">
          <MoviesContextProvider>
          <SimilarContextProvider>
          <GenresContextProvider>
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/watch-list" component={WatchListPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/movies/top_rated" component={TopRatedMoviesPage} />
          <Route exact path="/movies/popular" component={PopularMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>
          </SimilarContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));