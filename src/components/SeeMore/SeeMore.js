import React from "react";
import {
  Row,
  PaginationWrap,
  PaginationPList,
  PaginationItem,
} from "../../_GlobalStyle";

export const SeeMore = ({ setPhotoLimit }) => {
  const photoView = [10, 20, 50];

  return (
    <PaginationWrap>
      <PaginationPList>
        <Row>
          See more:
          {photoView.map((element) => (
            <PaginationItem
              key={element}
              onClick={(e) => {
                setPhotoLimit(e.target.textContent);
              }}
            >
              {element}
            </PaginationItem>
          ))}
        </Row>
      </PaginationPList>
    </PaginationWrap>
  );
};
