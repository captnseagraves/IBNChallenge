import React, { Component } from 'react';
import './Tickers.css';




class CoinCap extends Component {

componentWillMount = () => {
  setInterval(function() {
    fetch('https://www.coincap.io/page/BTC').then(result => {
      console.log("CoinCap", result.json());
    })
  }, 3000)
}


  render() {
    return (
      <div>
        <h2>CoinCap</h2>
      </div>
    )
  }
}

export default CoinCap;
