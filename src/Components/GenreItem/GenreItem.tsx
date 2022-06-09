import React from "react";
import {Link} from "react-router-dom";
import {CustomLink, GenreCard} from "./GenreItemStyle";

interface Props {
    name: string,
    to: string,
    onClick?: () => void
};

export const GenreItem: React.FC<Props> = ({name, to, onClick}) => {
    return <CustomLink to={to}><GenreCard className="genreItem" onClick={onClick}>
        {name}
    </GenreCard></CustomLink>
}