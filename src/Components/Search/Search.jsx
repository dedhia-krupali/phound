import React from "react";
import styled, { css } from "react-emotion";
import { fonts, colors } from "../../styles/themes";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export const Search = ({ setNewUrl, userInput, setUserInput }) => {
  const classes = {
    searchContainer: css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
    `,
    inputClass: css`
      height: 48px;
      width: 450px;
      ${fonts.medium}
    `,
    searchButtonContainer: css`
      height: 53px;
      width: 54px;
    `,
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const uri = `https://api.pexels.com/v1/search/?page=1&per_page=10&query=${userInput}`;
    const encodedURI = encodeURI(uri);
    setNewUrl(encodedURI);
  };

  return (
    <form className={classes.searchContainer} data-testid="search-form">
      <input
        type="text"
        className={classes.inputClass}
        value={userInput}
        onChange={handleUserInput}
        placeholder="Enter a topic to search..."
      />
      <button className={classes.searchButtonContainer} onClick={handleSubmit}>
        <SearchIcon />
      </button>
    </form>
  );
};
