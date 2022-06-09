import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {DisplayComponent} from "./ResultDipsplay";

export const ResultDisplay =()=>{

    const currentSearchQuery = useSelector(
        (state: RootState) => state.moviesSlice.currentQuery
    );
    const currentGenre = useSelector(
        (state: RootState) => state.moviesSlice.genre
    );

    if(!currentGenre && !currentSearchQuery ){
        return null
    }

    return <DisplayComponent>
            Your results for:{" "}
            {currentSearchQuery ? currentSearchQuery : currentGenre.name}
        </DisplayComponent>

}