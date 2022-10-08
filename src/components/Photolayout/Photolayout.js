import React, { useState, useEffect } from "react";
import { PhotoBlockWrap, PhotoBlock } from "../../_GlobalStyle";
import { Container } from "../../_GlobalStyle";
import api from "../../services/api";
import { Loading } from "../Loading";
import { Modal } from "../Modal";
import { IoIosHeart } from "react-icons/io";
import { handleIconClick } from "../../services/function/handleIconClick";

export const Photolayout = ({ limit, page }) => {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [modalUrl, setmodalUrl] = useState("");

  const getPhotos = async () => {
    await api.photo
      .getPhoto(page, limit)
      .then(({ data }) => {
        setPhotoList(data);
        setIsLoading(false);
        return data;
      })
      .catch((error) => {
        console.log(error.message, "LOAD_ERROR");
      });
  };

  const HandlerClickOnPhoto = (e) => {
    setModalActive(true);
    setmodalUrl(e);
  };

  useEffect(() => {
    getPhotos();
  }, [limit, page]);

  const PhotoRenderList = photoList.map((item, i) => (
    <PhotoBlockWrap key={item.id} className={"item item_" + `${i}`}>
      <PhotoBlock
        src={item.download_url}
        alt=""
        onClick={(e) => HandlerClickOnPhoto(e.target.src)}
      />
      <span>
        <IoIosHeart
          style={{ color: "#c93434", fontSize: "2em" }}
          onClick={() =>
            handleIconClick(item.id, item.download_url, item.author)
          }
        />
      </span>
    </PhotoBlockWrap>
  ));

  return (
    <>
      {!isLoading ? (
        <div>
          <Container>{PhotoRenderList}</Container>
          <Modal active={modalActive} setActive={setModalActive}>
            <img src={modalUrl} alt="" />
          </Modal>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
