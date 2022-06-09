import styled from "styled-components";
import {Link} from "react-router-dom";

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
`;

export const GenreCard = styled.div`
  border-radius: 0.5rem;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-image: linear-gradient(45deg, #0099dd, #00abbd 50%, #a1c7e0);
  transition: all 0.2s linear;

  &:hover {
    background-image: linear-gradient(45deg, #0099dd, #00abbd 25%, #a1c7e0);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.2s linear;
  }
`;
