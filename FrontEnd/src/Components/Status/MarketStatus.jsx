import React from "react";
import "./CryptoStatus.css";
import millify from "millify";

import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

const MarketStatus = ({ gs }) => {
  return (
    <>
      <h2>Today's Cryptocurrency Prices by Market Cap!</h2>
      <p>
        The active Cryptocurrencies are &nbsp;
        <span>{gs.active_cryptocurrencies.toLocaleString()}</span>&nbsp;
        across&nbsp;
        <span>{gs.active_exchanges}</span>&nbsp;exchanges globally, with a total
        market cap of <span>${millify(gs.quote.USD.total_market_cap)}</span>,
        a&nbsp;
        <div
          className={
            gs.quote.USD.total_market_cap_yesterday_percentage_change < 0
              ? "statusDown"
              : "statusUp"
          }>
          {gs.quote.USD.total_market_cap_yesterday_percentage_change < 0 ? (
            <RiArrowDropDownFill className='statusIcon' />
          ) : (
            <RiArrowDropUpFill className='statusIcon' />
          )}
          {gs.quote.USD.total_market_cap_yesterday_percentage_change.toLocaleString()}
          %
        </div>
        &nbsp; change in the last 24 hours. Bitcoin’s dominance is
        currently&nbsp;
        <span>{gs.btc_dominance.toLocaleString()}%</span>, a change of&nbsp;
        <div
          className={
            gs.btc_dominance_24h_percentage_change < 0
              ? "statusDown"
              : "statusUp"
          }>
          {gs.btc_dominance_24h_percentage_change < 0 ? (
            <RiArrowDropDownFill className='statusIcon' />
          ) : (
            <RiArrowDropUpFill className='statusIcon' />
          )}
          {gs.btc_dominance_24h_percentage_change.toLocaleString()}%
        </div>
        &nbsp; as well over the day.
      </p>
    </>
  );
};

export default MarketStatus;

/* <p>
  The active Cryptocurrencies are <span></span> across <span></span>
  markets globally, with a total market cap of <span></span>, an increase of{" "}
  <span></span>.
  The global crypto market cap is $1.12T, a 2.28%
        increase over the last day. 
</p>; */
