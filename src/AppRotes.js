import React from "react";
import { Route, Routes } from "react-router-dom";
import PhotoGallary from "./pages/PhotoGallary";
import LikedPhoto from "./pages/LikedPhoto";
import NoMatch from "./pages/NoMatch";
//pages
const AppRotes = () => {
  return (
    <>
      <Routes>
        {/* <Route> */}
        <Route path="/" element={<PhotoGallary />} />
        <Route path="/liked-photo" element={<LikedPhoto />} />
        {/* </Route> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default AppRotes;
