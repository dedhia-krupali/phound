import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "react-emotion";
import { fonts } from "../styles/themes";
import { Gallery } from "./Gallery/Gallery";
import { Search } from "./Search/Search";
import { Pagination } from "./Pagination/Pagination";

const classes = {
  container: css`
    padding: 100px;
  `,
  headerClass: css`
    ${fonts.bold};
    ${fonts.header};
    margin-left: 32px;
  `,
};

export const Container = () => {
  const [displayedUrl, setDisplayedUrl] = useState(null);
  const [newUrl, setNewUrl] = useState(null);
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState("");

  // Pexels URLs
  // https://api.pexels.com/v1/curated/?page=1&per_page=10
  const baseUrl = "https://api.pexels.com/v1/";
  const homeUrl = baseUrl + "curated/?page=1&per_page=10";

  const returnToHomepage = () => {
    setNewUrl(homeUrl);
    setUserInput("");
  };

  // When the App loads for the first time and there is no `displayedUrl` value
  //  in localStorage, set `newUrl` equal to the homepage URL.
  useEffect(() => {
    const localStorageUrl = JSON.parse(
      window.localStorage.getItem("displayedUrl")
    );
    if (!displayedUrl && !newUrl && !localStorageUrl) {
      setNewUrl(homeUrl);
    }
  }, [displayedUrl, newUrl, homeUrl]);

  // When a user reloads the App, `displayedUrl` and `newUrl` are both `null`,
  //  but `localStorage` may have the previous URL
  useEffect(() => {
    const localStorageUrl = JSON.parse(
      window.localStorage.getItem("displayedUrl")
    );
    if (!displayedUrl && !newUrl && !!localStorageUrl) {
      setNewUrl(localStorageUrl);
    }
  }, [displayedUrl, newUrl]);

  // Update the value of `displayedUrl` in localStorage every time the value of
  //  `displayedUrl` in state changes.
  useEffect(() => {
    if (!!displayedUrl) {
      window.localStorage.setItem("displayedUrl", JSON.stringify(displayedUrl));
    }
  }, [displayedUrl]);

  // If `displayedUrl` and `newUrl` both exist and are not equal to eachother,
  //  submit a fetch request for `newUrl`. This occurs whenever a new photo
  //  search is submitted, and whenever a pagination button is clicked.
  useEffect(() => {
    const fetchPexelsPhotos = async () => {
      const pexelApi = {
        method: "GET",
        url: "http://localhost:8000/images",
        params: { url: newUrl },
      };

      axios
        .request(pexelApi)
        .then((response) => {
          setResponse(response.data);
          setDisplayedUrl(newUrl);
          setNewUrl(null);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // invoke the async fetch function declared above if the conditions are met
    if (newUrl) {
      fetchPexelsPhotos();
    }
  }, [displayedUrl, newUrl, userInput, response]);

  const iconHome = (
    <div className="home-icon" title="Return to Homepage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="icon enabled home-icon"
        onClick={returnToHomepage}
        alt="Return to Homepage"
        style={{ height: 32, width: 32, cursor: "pointer" }}
      >
        <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
      </svg>
    </div>
  );

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {iconHome}
        <div className={classes.headerClass}> Phound </div>
      </div>
      <Search
        setNewUrl={setNewUrl}
        userInput={userInput}
        setUserInput={setUserInput}
        returnToHomepage={returnToHomepage}
      />
      <Gallery response={response} />
      <Pagination response={response} setNewUrl={setNewUrl} />
    </div>
  );
};
