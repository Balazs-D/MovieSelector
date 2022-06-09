import { LINK } from "./MovieListItemStyle";
import React from "react";

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
  return (
    <LINK to={to} onClick={onClick}>
      <img alt={title + "_cover"} src={imgUrl} />
      <div className="movieListItem__info">{title}</div>
    </LINK>
  );
};
