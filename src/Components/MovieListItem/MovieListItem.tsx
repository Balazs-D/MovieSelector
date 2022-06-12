import { ListItemLink } from "./MovieListItemStyle";
import React, {MutableRefObject, SyntheticEvent, useRef, useState} from "react";
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
    const onError = (e: SyntheticEvent) => {
setError(true)    };
  return (
    <ListItemLink to={to} onClick={onClick} onLoad={()=>setLoaded(true)} loaded={loaded}>
      <img alt={title + "_cover"} src={loaded ? (error ? placeholder : imgUrl): placeholder}  onError={onError} />
      <div className="movieListItem__info">{title}</div>
    </ListItemLink>
  );
};
function useEffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}

