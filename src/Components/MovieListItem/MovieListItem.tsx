import { LINK } from "./MovieListItemStyle";
import React, {useState} from "react";

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
  const [loaded, setLoaded] = useState<boolean>(false)
  return (
    <LINK to={to} onClick={onClick} className={loaded ? "cmp--loaded": "cmp-hidden"} >
      <img alt={title + "_cover"} src={imgUrl} onLoad={()=>setLoaded(prev=> !prev)} />
      <div className="movieListItem__info">{title}</div>
    </LINK>
  );
};
