import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::after {
  box-sizing: inherit;
}

* {
    scrollbar-width: auto;
    scrollbar-color: #531d1d #1c1c1c;
}
*::-webkit-scrollbar {
    width: 7px;
    display: none;
}

*::-webkit-scrollbar-track {
    background: #1c1c1c;
}

*::-webkit-scrollbar-thumb {
    background-color: #531d1d;
    border-radius: 5px;
    border: 0px none #1c1c1c;
}
  body {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family: 'Comfortaa', sans-serif;
  }
  a{
  color: #2d2d2d;
  text-decoration: none;
  white-space: nowrap;
}
.center{
  display: flex;
  align-items: center;
}
.liked-images{
  width: 100%;
}
`;

export const Container = styled.main`
  display: grid;
  width: min(100vw - 15px, 1280px);
  grid-gap: clamp(0.5rem, 0.818rem + 0.91vw, 1rem);
  height: 650px;
  overflow-y: scroll;
  margin-top: ${(props) => (props.top ? "70px" : "0")};

  .item {
    min-height: 200px;
    background-color: #ddd;
    background-position: center;
    background-size: cover;
    border-radius: 1px;
    cursor: pointer;
    &:hover {
      opacity: 0.95;
    }
  }

  .item_0 {
    grid-column: span 2;
  }
  .item_7 {
    grid-column: span 2;
  }

  @media screen and (min-width: 962px) {
    grid-template-columns: repeat(6, [col] 205px);
    grid-template-rows: repeat(3, [row] 205px);
    grid-gap: 12px;
    height: 650px;
    overflow-y: scroll;

    .item_0 {
      grid-column: span 2;
    }
    .item_1 {
      grid-column: span 2;
      grid-row: span 2;
    }
    .item_2 {
      grid-row: span 2;
    }
    .item_6 {
      grid-row: span 2;
    }
    .item_7 {
      grid-column: span 1;
    }
    .item_8 {
      grid-column: span 2;
    }
    .item_9 {
      grid-column: span 2;
    }
  }
`;
export const HeaderWrap = styled.header`
  width: min(100vw - 15px, 1280px);
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? "center" : "space-between")};

  max-width: 1280px;
  h1 {
    margin: 0;
  }
`;
export const Wrapper = styled.div`
  margin-top: 100px;
  display: grid;
  place-content: center;
`;
export const Center = styled.div`
  display: grid;
  place-items: center;
`;

export const PaginationWrap = styled.div`
  width: ${(props) => (props.width ? "500px" : "200px")};
  justify-self: ${(props) => (props.center ? "center" : "start")};
  padding: 10px;
`;
export const PaginationPList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const PaginationItem = styled.li`
  cursor: pointer;
  margin-right: 10px;
  opacity: 0.95;
  position: relative;
  font-size: ${(props) => (props.fontMedium ? "22px" : "16px")};
  &::before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    width: 0;
    background-color: black;
    transition: width 0.3s ease;
  }
  &:hover {
    &::before {
      width: 100%;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const PhotoBlockWrap = styled.div`
  overflow: hidden;
  display: grid;
  place-items: center;
  position: relative;
  user-select: none;
  place-content: center;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  img {
    width: 350px;
  }
  &:hover {
    span {
      display: block;
    }
  }
`;

export const PhotoBlock = styled.img`
  /* background-image: url(${(props) => props.img}); */
  max-width: 100%;
   transform: scale(3.5);
   position: relative;
   &:hover{
    opacity: 0.97;
   }
`;
