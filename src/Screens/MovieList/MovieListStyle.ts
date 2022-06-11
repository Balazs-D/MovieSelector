import styled from "styled-components";

export const MovieScreen = styled.div`
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
      border-radius: .5rem
    }
    
    .disabled {
      pointer-events: none;
      background: white; 
      color: grey
    }
    .enabled {
      pointer-events: all;
      background: #0099dd;
      color: black
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

