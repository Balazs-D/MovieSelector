import styled from "styled-components";

export const MovieDetailsStyle = styled.div`
  width: 100vw;
  height: 80%;
  margin: auto;
  background-image: linear-gradient(90deg, #026e81, rgba(0, 0, 0, 0.8));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  .movieDetailScreen__data {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .movieDetailScreen__backdrop {
    position: absolute;
    z-index: -1;
  }

  .movieDetailScreen__img {
    height: 80%;
    margin: auto;
  }

  .movieDetailScreen__data_text {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
  }

  .movieDetailScreen__column {
    display: flex;
    flex-direction: column;
  }

  .movieDetailScreen__text {
    color: white;
  }

  .movieDetailScreen__text_desc {
    margin: 10% 0;

    & > :nth-child(1) {
      margin-bottom: 2%;
    }
  }

  .main-text {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .sub-text {
    font-size: 1.5rem;
  }

  .my {
    margin: 5% 0;
  }
`;
