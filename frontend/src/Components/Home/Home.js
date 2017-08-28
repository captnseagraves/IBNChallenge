import React, { Component } from 'react';
import './Home.css';

import Poloniex from '../Tickers/Poloniex.js'
import CoinCap from '../Tickers/CoinCap.js'
import Kraken from '../Tickers/Kraken.js'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to BitTracker</h2>
        </div>
        <Poloniex />
        <CoinCap />
        <Kraken />
      </div>
    )
  }
}

export default Home;
