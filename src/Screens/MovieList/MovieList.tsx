import React, { useEffect } from "react";
import {  MovieListContainer, MovieScreen } from "./MovieListStyle";
// import {
//   getListByGenre,
//   resetGenreList,
//   searchMovie,
//   setMovieId,
//   setQuery,
// } from "../../AppSlice";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { MovieListItem } from "../../Components/MovieListItem/MovieListItem";
import {getListByGenre, setMovieId} from "../../AppSlice";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export const MovieList = () => {
  const dispatch: AppDispatch = useDispatch();
  const listByGenre = useSelector(
    (state: RootState) => state.moviesSlice.listOfMovies
  );
  const genre = useSelector((state: RootState) => state.moviesSlice.genre);


  useEffect(()=>{
    dispatch(getListByGenre({genreId: genre.code, page: 1}))
  }, [])
// const pagination = useSelector(
  //   (state: RootState) => state.moviesSlice.listOfMovies
  // );
  // const processing = useSelector(
  //   (state: RootState) => state.moviesSlice.processing
  // );
  // const searchQuery = useSelector(
  //   (state: RootState) => state.moviesSlice.currentQuery
  // );

  // useEffect(() => {
  //   if (searchQuery) {
  //     dispatch(searchMovie({ query: searchQuery }));
  //   }
  //   dispatch(getListByGenre({ genreId: genre.code, page: pagination.page }));
  //   return () => {
  //     dispatch(resetGenreList());
  //   };
  // }, [dispatch]);

  if (listByGenre.results.length === 0) {
    return <MovieScreen>No search result...</MovieScreen>;
  }

  return (
    <MovieScreen>
      <MovieListContainer>
        {listByGenre?.results.map((item, i) => (
          <MovieListItem
            to={"/" + genre.name + "/" + item.id}
            onClick={() => {
              dispatch(setMovieId(item.id));
              // dispatch(setQuery(""));
            }}
            imgUrl={imageBaseUrl + item.backdrop_path}
            title={item.title}
            key={i}
          />
        ))}
      </MovieListContainer>
      <div className="movieListScreen__loadmore">LOAD MORE...</div>
    </MovieScreen>
  );
};
