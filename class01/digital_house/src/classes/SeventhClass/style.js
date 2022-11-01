import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  max-width: 1200px;
  margin: 50px;
  
  font-family: "Calibri",sans-serif;
  color: white;

  &>h1 {

    margin-bottom: 32px;

  }

  &>button {

    color: black;
    padding: 4px;
    margin-right: 12px;

  }

  .tittle-wrapper {

    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;

    button {

      font-size: 16px;
      background-color: rgb(105, 194, 105);
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      transition: .2s ease-in-out;

      &:hover {

        filter: brightness(120%);
        cursor: pointer;

      }

    }

  }

  .products {

    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    gap: 42px;

  }

`;