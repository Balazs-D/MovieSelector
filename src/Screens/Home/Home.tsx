import React, {useEffect} from "react";
import {HomeScreen} from "./HomeStyle";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {getGenres, setGenreData} from "../../AppSlice";
import {Genres} from "../../Types";
import {useAppSelector} from "../../store/hooks";
import { GenreItem } from "../../Components/GenreItem/GenreItem";

export const Home = () => {
    const dispatch: AppDispatch = useDispatch();
    const genres = useAppSelector((state) => state.moviesSlice.genres);

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    return (
        <HomeScreen>
            {
                genres.map((item, i) => (
                    <GenreItem
                        to={"/" + item.name}
                        name={item.name}
                        onClick={() => {
                            dispatch(
                                setGenreData({
                                    code: item.id,
                                    name: item.name,
                                })
                            );
                        }}
                        key={i}
                    />
                ))}
        </HomeScreen>
    );
};
