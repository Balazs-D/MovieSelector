import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieScreen = styled.div`
  overflow-y: scroll;

  .movieListScreen__loadmore {
    text-align: center;
    margin: 10px;
  }
`;

export const MovieListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

