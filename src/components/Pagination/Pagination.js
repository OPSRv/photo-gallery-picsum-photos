import React from "react";
import {
  Row,
  PaginationWrap,
  PaginationPList,
  PaginationItem,
} from "../../_GlobalStyle";

export const Pagination = ({ limit, pageAmount }) => {
  let count = 100 / limit;
  let paginationArray = [];

  for (let i = 1; i < count; i++) {
    paginationArray.push(i);
  }

  return (
    <PaginationWrap center>
      <PaginationPList>
        <Row justify>
          {paginationArray.length > 1 ? (
            paginationArray.map((item) => (
              <PaginationItem
                key={item}
                fontMedium
                onClick={(e) => {
                  pageAmount(e.target.textContent);
                }}
              >
                {item}
              </PaginationItem>
            ))
          ) : (
            <span>. . .</span>
          )}
        </Row>
      </PaginationPList>
    </PaginationWrap>
  );
};
