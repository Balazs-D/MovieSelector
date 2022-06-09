import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Screens/Home/Home";
import {MovieList} from "./Screens/MovieList/MovieList";
import {MovieDetails} from "./Screens/MovieDetails/MovieDetails";


const AppContainer = styled.div`
  position: fixed;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export const App = () => {
  return (
    <AppContainer>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":genre" element={<MovieList />} />
            <Route path=":genre/:movieId" element={<MovieDetails />} />

        </Routes>
    </AppContainer>
  );
};
