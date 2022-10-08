import styled from "styled-components";

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #00000040;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(50%, 50%);
  display: grid;
  place-items: center;
  place-content: center;
  transform: ${(props) => props.visible};
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => props.pointer};
  transition: 0.5;
`;
export const ModalContent = styled.div`
  /* display: grid;
  place-items: center; */
  display: flex;
  justify-content: center;
  span {
    display: block;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  span > img {
    transition: transform 0.3s linear;
    transform: ${(props) => props.transform}, translate(-50%, -50%);
    top: 0;
    left: 0;
    border-radius: 2px;
    width: min(100%, 800px);
  }
`;
