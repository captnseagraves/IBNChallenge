import React, { Component } from 'react';
import './Tickers.css';


class Kraken extends Component {

componentWillMount = () => {
  setInterval(function() {
    fetch('https://api.kraken.com/0/public/Ticker?pair=ETHXBT').then(result => {
      console.log("Kraken",result.json());
    })
  }, 3000)
}

  render() {
    return (
      <div>
        <h2>Kraken</h2>
      </div>
    )
  }
}

export default Kraken;
