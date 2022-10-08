import React from "react";
import { ModalWrapper, ModalContent } from "./_styles";

export const Modal = ({ active, setActive, children }) => {
  return (
    <ModalWrapper
      onClick={() => setActive(false)}
      visible={active ? "scale(1)" : "scale(0)"}
      opacity={active ? "1" : "0"}
      pointer={active ? "all" : "none"}
    >
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        transform={active ? "scale(1)" : "scale(0.5)"}
      >
        <div onClick={() => setActive(false)}>{children}</div>
      </ModalContent>
    </ModalWrapper>
  );
};

// <ModalWrapper></ModalWrapper>;
