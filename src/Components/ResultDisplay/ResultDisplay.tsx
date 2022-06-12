import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {DisplayComponent} from "./ResultDipsplay";
import {ListMode} from "../../Types";

export const ResultDisplay =()=>{

    const currentSearchQuery = useSelector(
        (state: RootState) => state.moviesSlice.currentQuery
    );
    const currentGenre = useSelector(
        (state: RootState) => state.moviesSlice.genre
    );

    const mode = useSelector((state: RootState) => state.moviesSlice.listMode)


    if(!currentGenre && !currentSearchQuery ){
        return null
    }

    return <DisplayComponent>
            Your results for:{" "}
            {mode === ListMode.SEARCH ? currentSearchQuery : currentGenre.name}
        </DisplayComponent>

}