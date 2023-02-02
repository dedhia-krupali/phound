import React from "react";
import { css } from "react-emotion";
import { fonts, colors } from "../../styles/themes";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

const PrevPagePagination = ({ pageUrl, setNewUrl }) => {
  // click-handler callback for pagination
  const paginateToPrevPage = () => setNewUrl(pageUrl);

  const iconPrevPageEnabled = (
    <div
      className={classes.paginateClass}
      onClick={paginateToPrevPage}
      alt="Previous Page"
    >
      <LeftArrow />
    </div>
  );

  if (pageUrl) {
    return <div className={classes.iconClass}>{iconPrevPageEnabled}</div>;
  }
};

const NextPagePagination = ({ pageUrl, setNewUrl }) => {
  // click-handler callback for pagination
  const paginateToNextPage = () => setNewUrl(pageUrl);

  const iconNextPageEnabled = (
    <div
      className={classes.paginateClass}
      onClick={paginateToNextPage}
      alt="Next Page"
    >
      <RightArrow />
    </div>
  );

  if (pageUrl) {
    return <div className={classes.iconClass}>{iconNextPageEnabled}</div>;
  }
};

const classes = {
  paginateClass: css`
    display: flex;
    flex-direction: row;
    height: 18px;
    width: 16px;
    margin-right: 12px;
    margin-left: 12px;
    cursor: pointer;
  `,
  iconClass: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
};

export const PaginationResult = ({ prev, next, pageUrl, setNewUrl }) => {
  if (prev) {
    return <PrevPagePagination pageUrl={pageUrl} setNewUrl={setNewUrl} />;
  } else if (next) {
    return <NextPagePagination pageUrl={pageUrl} setNewUrl={setNewUrl} />;
  }
};
