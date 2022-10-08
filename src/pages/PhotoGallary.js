import React, { useState } from "react";
import { Pagination } from "../components/Pagination";
import { Photolayout } from "../components/Photolayout";
import { Header } from "../components/Header";
import { SeeMore } from "../components/SeeMore/SeeMore";
import { Wrapper, Center } from "../_GlobalStyle";

const PhotoGallary = () => {
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState("10");

  return (
    <>
      <Wrapper>
        <Center>
          <Header />
          <SeeMore phoroLimit={limit} setPhotoLimit={setLimit} />
          <Photolayout limit={limit} page={page} />
          <Pagination limit={limit} pageAmount={setPage} />
        </Center>
      </Wrapper>
    </>
  );
};

export default PhotoGallary;
