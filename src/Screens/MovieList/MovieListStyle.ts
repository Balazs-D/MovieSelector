import styled from "styled-components";
import {Loaded} from "../MovieDetails/MovieDetails";

interface Props {
    lastPage: boolean,
    firstPage: boolean
}

export const MovieScreen = styled.div<Props>`
  overflow-y: scroll;

  .movieListScreen__pagination {
    text-align: center;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .movieListScreen__loadmore-button {
      border: 1px solid grey;
      padding: 5px 20px;
      border-radius: .5rem;
      cursor: pointer;

      &--back {
        pointer-events: ${p => p.firstPage ? "none" : "all"};
        background: ${p => p.firstPage ? "white" : "#0099dd"};
        color: ${p => p.firstPage ? "grey" : "black"}
      }

      &--next {
        pointer-events: ${p => p.lastPage ? "none" : "all"};
        background: ${p => p.lastPage ? "white" : "#0099dd"};
        color: ${p => p.lastPage ? "grey" : "black"}
      }
    }

    .movieListScreen__pagination_data {
      margin: 0 20px
    }
  }
`;

export const MovieListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  
`;

