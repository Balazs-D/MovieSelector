import React, {useEffect, useState} from "react";
import {  MovieListContainer, MovieScreen } from "./MovieListStyle";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { MovieListItem } from "../../Components/MovieListItem/MovieListItem";
import {getListByGenre, resetGenreList, searchMovie, setMovieId, setQuery} from "../../AppSlice";
import {ResultDisplay} from "../../Components/ResultDisplay/ResultDisplay";
import {MovieDetails} from "../../Types";



const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export const MovieList = () => {
  const dispatch: AppDispatch = useDispatch();
  const listOfMovies = useSelector(
    (state: RootState) => state.moviesSlice.listOfMovies
  );
  const genre = useSelector((state: RootState) => state.moviesSlice.genre);
  const pagination = useSelector(
    (state: RootState) => state.moviesSlice.listOfMovies
  );
  // const processing = useSelector((state: RootState) => state.moviesSlice.processing)

const [d, setD] = useState<MovieDetails[]>([])
  const processing = useSelector(
    (state: RootState) => state.moviesSlice.processing
  );
  const searchQuery = useSelector(
    (state: RootState) => state.moviesSlice.currentQuery
  );

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchMovie({ query: searchQuery }));
    }
    dispatch(getListByGenre({ genreId: genre!.code, page: pagination.page }));

    return () => {
      dispatch(resetGenreList());
      dispatch(setQuery(""));
    };

  }, [dispatch]);


  useEffect(()=>{
    if(listOfMovies.results.length >0){
      setD(listOfMovies.results)

    }
  },[listOfMovies])

const loadMore =()=>{

  dispatch(getListByGenre({genreId: genre!.code, page: Number(pagination.page) + 1 }))

}

useEffect(()=>{
  if(listOfMovies.page > 1){
    console.log(d)
    console.log(listOfMovies.results)
    setD(d.concat(listOfMovies.results))
  }
}, [listOfMovies.page])




  const handleScroll = (e:{ target: HTMLInputElement }) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if(bottom){
      loadMore()


    }
  }

  if (listOfMovies.results.length === 0) {
    return <MovieScreen>No search result...</MovieScreen>;
  }
  return (
    <MovieScreen onScroll={handleScroll}>
      <ResultDisplay />
      <MovieListContainer  >
        {d.map((item, i) => (
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
<a id="bottom" />
      <div className="movieListScreen__loadmore">LOAD MORE...</div>


    </MovieScreen>
  );
}