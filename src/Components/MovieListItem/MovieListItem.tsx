import { LINK } from "./MovieListItemStyle";
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
    <LINK to={to} onClick={onClick} className={loaded ? "cmp--loaded": "cmp-hidden"} onLoad={()=>setLoaded(true)}>
      <img alt={title + "_cover"} src={loaded ? (error ? placeholder : imgUrl): placeholder} className={loaded ? "" : "pulse"} onError={onError} />
      <div className="movieListItem__info">{title}</div>
    </LINK>
  );
};
function useEffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}

