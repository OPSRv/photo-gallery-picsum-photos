import React from "react";
import { Row, HeaderWrap } from "../../_GlobalStyle";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";

export const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrap>
      <Row>
        <h1>{location.pathname === "/" ? "Photo gallary" : "Liked Photo"}</h1>
        <Link
          className="center"
          to={location.pathname === "/" ? "/liked-photo" : "/"}
        >
          {location.pathname === "/" ? "Liked photo" : "back"}
          {location.pathname === "/" ? (
            <IoIosHeart style={{ color: "#c93434", fontSize: "2em" }} />
          ) : (
            <span></span>
          )}
        </Link>
      </Row>{" "}
    </HeaderWrap>
  );
};
