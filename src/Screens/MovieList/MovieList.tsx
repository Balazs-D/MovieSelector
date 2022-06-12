import React, {useEffect, useRef, useState} from "react";
import {MovieListContainer, MovieScreen} from "./MovieListStyle";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {MovieListItem} from "../../Components/MovieListItem/MovieListItem";
import {getListByGenre, resetGenreList, searchMovie, setMovieId, setQuery} from "../../AppSlice";
import {ResultDisplay} from "../../Components/ResultDisplay/ResultDisplay";
import {ListMode} from "../../Types";
import {useParams} from "react-router-dom";


const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export const MovieList = () => {
    const dispatch: AppDispatch = useDispatch();
    const {genre} = useParams()
    const listOfMovies = useSelector(
        (state: RootState) => state.moviesSlice.listOfMovies
    );
    const genreData = useSelector((state: RootState) => state.moviesSlice.genre);
    const pagination = useSelector(
        (state: RootState) => state.moviesSlice.listOfMovies
    );
    const mode = useSelector((state: RootState) => state.moviesSlice.listMode)

    const processing = useSelector(
        (state: RootState) => state.moviesSlice.processing
    );
    const searchQuery = useSelector(
        (state: RootState) => state.moviesSlice.currentQuery
    );

    const getMovieList = (nextPageToCall: number, query: string) => {
        if (ListMode.SEARCH === mode) {
            dispatch(searchMovie({query: query, page: nextPageToCall}));
        } else {
            dispatch(getListByGenre({genreId: genreData!.code ?? genre, page: nextPageToCall}));

        }
    }

    useEffect(() => {
        getMovieList(pagination.page, searchQuery)
        dispatch(setMovieId(0))

        return () => {

        };

    }, [dispatch]);


    if (processing.isLoading) {
        return <div>Loading....</div>
    }


    return (
        <MovieScreen firstPage={pagination.page === 1} lastPage={pagination.page === pagination.total_pages}>
            <ResultDisplay/>
            <MovieListContainer>
                {(listOfMovies && listOfMovies.results) && listOfMovies.results.map((item, i) => (
                    <MovieListItem
                        to={"/" + genreData.name + "/" + item.id}
                        onClick={() => {
                            dispatch(setMovieId(item.id));
                        }}
                        imgUrl={imageBaseUrl + item.backdrop_path}
                        title={item.title}
                        key={i}
                    />
                ))}
            </MovieListContainer>
            <div className="movieListScreen__pagination">
                <button
                    className="movieListScreen__loadmore-button movieListScreen__loadmore-button--back"
                    onClick={() => getMovieList(pagination.page - 1, searchQuery)}>back
                </button>
                <div className="movieListScreen__pagination_data">{listOfMovies.page} / {listOfMovies.total_pages}</div>
                <button
                    className="movieListScreen__loadmore-button movieListScreen__loadmore-button--next"
                    onClick={() => getMovieList(pagination.page + 1, searchQuery)}>next
                </button>
            </div>
        </MovieScreen>
    );
}