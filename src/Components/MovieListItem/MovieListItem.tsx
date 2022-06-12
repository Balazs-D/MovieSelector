import {ListItemLink} from "./MovieListItemStyle";
import React, {useState} from "react";
import placeholder from "../../assets/movie-placeholder.png"

interface Props {
    title: string;
    to: string;
    imgUrl: string;
    onClick: () => void;
}


export const MovieListItem: React.FC<Props> = ({
                                                   title,
                                                   to,
                                                   imgUrl,
                                                   onClick,

                                               }) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const onError = () => {
        setError(true)
    };
    return (
        <ListItemLink to={to} onClick={onClick} onLoad={() => setLoaded(true)} loaded={loaded}>
            <img alt={title + "_cover"} src={loaded ? (error ? placeholder : imgUrl) : placeholder} onError={onError}/>
            <div className="movieListItem__info">{title}</div>
        </ListItemLink>
    );
};

