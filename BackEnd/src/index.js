const PORT = 8800;
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { json } = require("stream/consumers");
require("dotenv").config();

const app = express();
app.use(cors());

//Getting the coins data
app.get("/coins", (req, resp) => {
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params: {
      vs_currency: "usd",
      page: "1",
      per_page: "300",
      order: "market_cap_desc",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Getting the global status
app.get("/global-status", (req, resp) => {
  const options = {
    method: "GET",
    url: "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    headers: {
      "X-CMC_PRO_API_KEY": process.env.MARKET_CAP_API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

//Getting Crypto News
app.get("/news", (req, resp) => {
  const config = {
    method: "get",
    url: "https://api.coinstats.app/public/v1/news/trending?skip=0&limit=5",
    headers: {},
  };

  axios(config)
    .then((response) => {
      resp.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//Getting Single Coin Data
app.get("/coin", (req, resp) => {
  const coinId = req.query.coinid;

  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${coinId}`,
    params: {
      localization: "false",
      tickers: "true",
      market_data: "true",
      community_data: "false",
      developer_data: "false",
      sparkline: "false",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

const date = new Date();
let currentTime = Math.floor(date.getTime() / 1000);
let oneDay = currentTime - 24 * 60 * 60;
let oneWeek = 7 * 24 * 60 * 60;
let oneMonth = 30 * 24 * 60 * 60;
let oneYear = 365 * 24 * 60 * 60;

app.get("/one-day", (req, resp) => {
  const symbol = req.query.symbol;
  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
    params: {
      from: oneDay,
      vs_currency: "usd",
      to: currentTime,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/one-week", (req, resp) => {
  const symbol = req.query.symbol;
  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
    params: {
      from: oneWeek,
      vs_currency: "usd",
      to: currentTime,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/one-month", (req, resp) => {
  const symbol = req.query.symbol;
  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
    params: {
      from: oneMonth,
      vs_currency: "usd",
      to: currentTime,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/one-year", (req, resp) => {
  const symbol = req.query.symbol;
  const options = {
    method: "GET",
    url: `https://coingecko.p.rapidapi.com/coins/${symbol}/market_chart/range`,
    params: {
      from: oneYear,
      vs_currency: "usd",
      to: currentTime,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      resp.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => console.log(`server started running at port ${PORT}`));
  
