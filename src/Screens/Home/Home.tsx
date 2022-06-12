import React, {useEffect} from "react";
import {HomeScreen} from "./HomeStyle";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {getGenres, resetGenreList, setGenreData, setListMode} from "../../AppSlice";
import {Genres, ListMode} from "../../Types";
import {useAppSelector} from "../../store/hooks";
import { GenreItem } from "../../Components/GenreItem/GenreItem";

export const Home = () => {
    const dispatch: AppDispatch = useDispatch();
    const genres = useAppSelector((state) => state.moviesSlice.genres);
    const isLoading = useSelector((state: RootState)=> state.moviesSlice.processing).isLoading;

    const selectGenre =(item:Genres)=>{
        dispatch(
            setGenreData({
                code: item.id,
                name: item.name,
            })
        );
        dispatch(setListMode(ListMode.GENRE))
    }
    useEffect(() => {
        dispatch(resetGenreList());
        dispatch(getGenres())
        dispatch(setGenreData({code: 0,name:""}))
    }, [])

    if(isLoading){
        return <div>loading.......</div>
    }

    return (
        <HomeScreen>
            {
                genres.map((item, i) => (
                    <GenreItem
                        to={item.name}
                        name={item.name}
                        onClick={() => {
                            selectGenre(item)
                        }}
                        key={i}
                    />
                ))}
        </HomeScreen>
    );
};
