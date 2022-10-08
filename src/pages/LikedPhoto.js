import React, { useState } from "react";
import { Header } from "../components/Header";
import { Container, PhotoBlockWrap, Wrapper, Center } from "../_GlobalStyle";

const LikedPhoto = () => {
  const likedPhoto = JSON.parse(localStorage.getItem("photo"));

  return (
    <>
      {likedPhoto ? (
        <Wrapper>
          <Center>
            <Header />
            <Container top>
              {likedPhoto.map((photo, i) => (
                <PhotoBlockWrap key={photo.id} className="item">
                  <img src={photo.photo} alt={photo.id} />
                </PhotoBlockWrap>
              ))}
            </Container>{" "}
          </Center>
        </Wrapper>
      ) : (
        <Wrapper>
          <Center>
            <Header />
            <Container top>
              <span>no liked photo</span>
            </Container>
          </Center>
        </Wrapper>
      )}
    </>
  );
};

export default LikedPhoto;
