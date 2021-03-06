import React, {useEffect, useState} from "react";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {getMovie, resetMovieDetails} from "../../AppSlice";
import {MovieDetailsStyle} from "./MovieDetailsStyle";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export interface Loaded {
    backdrop: boolean,
    cover: boolean
}

export const MovieDetails = () => {
    const dispatch: AppDispatch = useDispatch();
    const movieId = useSelector((state: RootState) => state.moviesSlice.movieId);
    const details = useSelector(
        (state: RootState) => state.moviesSlice.movieDetails
    )
    const [loaded, setLoaded] = useState<Loaded>({backdrop: false, cover: false})


    useEffect(() => {
        dispatch(getMovie({movieId: movieId}));
        return () => {
            dispatch(resetMovieDetails());
        };
    }, [dispatch, movieId]);

    return (
        <MovieDetailsStyle backdrop={loaded.backdrop} cover={loaded.cover}>
            <img
                className="movieDetailScreen__backdrop"
                alt={details?.title + "_backdrop"}
                src={imageBaseUrl + details?.backdrop_path}
                onLoad={() => setLoaded({...loaded, backdrop: true})}

            />
            <div className="movieDetailScreen__data">
                <img
                    className="movieDetailScreen__img"
                    alt={details?.title + "_cover"}
                    src={imageBaseUrl + details?.poster_path}
                    onLoad={() => setLoaded({...loaded, cover: true})}
                />
                <div className="movieDetailScreen__data_text">
                    <div>
                        <div className="movieDetailScreen__text main-text">
                            {details?.title} ({details?.release_date?.substring(0, 4) ?? null}
                            )
                        </div>
                        <div className="movieDetailScreen__text sub-text">
                            {details?.runtime} min
                        </div>

                        <div className="movieDetailScreen__text_desc">
                            <div className="movieDetailScreen__text sub-text">
                                {details?.tagline}
                            </div>
                            <div className="movieDetailScreen__text sub-text">
                                {details?.overview}
                            </div>
                        </div>
                    </div>
                    <div className="movieDetailScreen__text">
                        {details?.genres?.map((genre, i) => (
                            <div key={i}>{genre.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </MovieDetailsStyle>
    );
};
