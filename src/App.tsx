import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";


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

      </Routes>
    </AppContainer>
  );
};
