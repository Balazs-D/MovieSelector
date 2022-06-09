import styled from "styled-components";

export const HeaderContainer = styled.div`
  .header__actions {
    border-bottom: 1px solid grey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: #0099dd;
  }

  .header__title {
    font-size: 2rem;
    text-decoration: none;
    color: black;
  }

  .header__searchbar {
    background: white;
    border: 1px solid grey;

    &:focus-within {
      box-shadow: 0 0 2px 0px #026e81;
    }

    input {
      padding: 15px;
      border: none;

      &:focus {
        outline: none;
      }
    }

    a {
      padding: 5px;
      border-left: 1px solid grey;
      text-decoration: none;
      font-size: 1rem;
      color: #026e81;
    }

    .link--disabled {
      pointer-events: none;
      color: grey;
    }
  }

  
`;
