import styled from "styled-components";

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #00000040;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  transform: ${(props) => props.visible};
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => props.pointer};
  transition: 0.5;
`;
export const ModalContent = styled.div`
  img {
    height: 100vh;
    transition: transform 0.3s linear;
    transform: ${(props) => props.transform};
    padding: 100px;
    border-radius: 2px;
  }
`;
