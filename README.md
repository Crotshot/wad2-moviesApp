# Assignment 1 - ReactJS app.

Name: Pádraig Crotty

## Features.

 + Feature 1 - Popular movie page which displays movies that are currently popular 
 + Feature 2 - Top rated movies page which displays the top rated movies on TMDB
 + Feature 3 - Similar movies which displays movies that are simialr to a selected movie
 + Feature 4 - Removing favorites re adds them to the homepage
 + Feature 5 - Removing a movie from the watch list re adds it back into upcoming

## Setup requirements.

Type  "npm start" into the console and connect to application on localhost:3000

## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1 - Get popular movies
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1 - Get the top rated movies
+ https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY} - Get movies that are similar to a specific movie

### UI Design.

![][homePage]
>Changed aesthetic of application

![][popularMovies]
>Added popular movies page

![][topRatedMovies]
>Added top rated movies page

![][movieDetails1]
>Movie details page now has similar movies displayed beneath review

![][movieDetails2]
>Movie details - extended

![][addToFavorites]
>Hovering over the Add to Favorites button will animated it with an upward arrow.

![][addToFavoritesAnim]
>As shown here

![][removeFromFavorites]
>Hovering over the Remove from Favorites button will animated it with a downward arrow.

![][removeFromFavoritesAnim]
>As shown here

![][addToWatchList]
>Hovering over the Add to Watch List button will animated it with an upward arrow.

![][addToWatchListAnim]
>As shown here

![][removeFromWatchList]
>Hovering over the Remove from Watch List button will animated it with a downward arrow.

![][removeFromWatchListAnim]
>As shown here

## Routing.

+ /movies/top_rated (public) - displays the top rated movies.
+ /movies/popular (public) - displays the currently popular movies.
+ <SimilarContextprovider> - surrounds routes, allows use of similar context

### Data hyperlinking.

![][similarMovies1]
> Clicking a similar movie card in movie details subsequently takes user to that movies detail page

![][similarMovies2]
>Similar movies - extended 



---------------------------------

[model]: ./data.jpg
[homePage]: ./public/homePage.png
[popularMovies]: ./public/popularMovies.png
[topRatedMovies]: ./public/topRatedMovies.png
[addToFavorites]: ./public/addToFavorites.png
[movieDetails1]: ./public/movieDetails1.png
[movieDetails2]: ./public/movieDetails2.png
[addToFavoritesAnim]: ./public/addToFavoritesAnim.png
[removeFromFavorites]: ./public/removeFromFavorites.png
[removeFromFavoritesAnim]: ./public/removeFromFavoritesAnim.png
[addToWatchList]: ./public/addToWatchList.png
[addToWatchListAnim]: ./public/addToWatchListAnim.png
[removeFromWatchList]: ./public/removeFromWatchList.png
[removeFromWatchListAnim]: ./public/removeFromWatchListAnim.png
[similarMovies1]: ./public/similarMovies1.png
[similarMovies2]: ./public/similarMovies2.png
