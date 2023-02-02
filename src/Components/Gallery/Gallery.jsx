import React from "react";

import { css } from "react-emotion";
import { fonts, colors } from "../../styles/themes";
import ClipLoader from "react-spinners/ClipLoader";

export const Gallery = (response) => {
  const classes = {
    photoClass: css`
      display: block;
      width: 600px;
      height: 400px;
      object-fit: contain;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin-bottom: 28px;
      margin-top: 100px;
      padding: 50px;
      background-color: ${colors.imageBackground};
    `,
    galleryPhotoClass: css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    `,
    photoCredit: css`
      ${fonts.subTitle};
      margin-top: 16px;
    `,
  };
  return (
    <>
      {!response?.response ? (
        <ClipLoader color="black" loading={true} size={150} />
      ) : response?.response?.total_results <= 0 ? (
        <div>
          <p>Your search did not match any photos.</p>
          <p>Suggestions:</p>
          <div>Try Nature, Trees, Houses</div>
        </div>
      ) : !response?.response?.photos ? (
        <div data-testid="null-data">
          <p>Enter a search term or go back to home page</p>
        </div>
      ) : (
        response?.response?.photos.length > 0 && (
          <ul className={classes.galleryPhotoClass}>
            {response?.response?.photos.map((photoData) => (
              <React.Fragment key={photoData.id}>
                <div className={classes.photoClass} data-testid="image">
                  <a
                    href={photoData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      // className
                      src={photoData.src.medium}
                      alt="alt text"
                    />
                  </a>
                  <div className={classes.photoCredit}>
                    <span>Photo by </span>
                    <a
                      href={photoData.photographer_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="photographer-url"
                    >
                      <b>{photoData.photographer}</b>
                    </a>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </ul>
        )
      )}
    </>
  );
};
