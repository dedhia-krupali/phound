import React from "react";
import { css } from "react-emotion";
import { fonts } from "../../styles/themes";
import { PaginationResult } from "./PaginationResult";

export const Pagination = ({ response, setNewUrl }) => {
  const classes = {
    container: css`
      display: flex;
      justify-content: center;
      flex-direction: row;
    `,
    pageTextClass: css`
      ${fonts.footerText};
    `,
  };
  return (
    <div className={classes.container}>
      {response && (
        <PaginationResult
          prev={true}
          next={false}
          setNewUrl={setNewUrl}
          pageUrl={response.prev_page}
        />
      )}
      {response?.page && (
        <span className={classes.pageTextClass} data-testid="page-number">
          <b>Page {response.page}</b>
        </span>
      )}
      {response && (
        <PaginationResult
          prev={false}
          next={true}
          setNewUrl={setNewUrl}
          pageUrl={response.next_page}
        />
      )}
    </div>
  );
};
