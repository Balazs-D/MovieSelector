import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props {
    loaded: boolean
}

export const ListItemLink = styled(Link)<Props>`
  border: 1px solid grey;
  border-radius: 0.5rem;
  margin: 10px;
  overflow: hidden;
  text-decoration: none;
  color: #026e81;
  transition: all 0.3s linear;
  
  &:hover {
    transition: all 0.2s linear;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img {
    width: 100%;
    object-fit: contain;
    animation: ${p => p.loaded ? "pulse 0.1s infinite alternate" : "none"}


    @keyframes pulse {
      from {
        opacity: .1;
      }

      to {
        opacity: 1;
      }
    }
  }
  


  .movieListItem__info {
    padding: 10px;
  }
`;


