PORT = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.listen(8000, () => console.log(`server is running on port = ${PORT}`));

app.get("/images", (req, res) => {
  const pexelApi = {
    method: "GET",
    url: req.query.url,
    headers: {
      Accept: "application/json",
      Authorization: process.env.REACT_APP_PEXEL_API_KEY,
    },
  };

  axios
    .request(pexelApi)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});
