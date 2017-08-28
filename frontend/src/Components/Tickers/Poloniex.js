import React, { Component } from 'react';
import './Tickers.css';


class Poloniex extends Component {

  componentWillMount () {

    setInterval(function() {
      fetch('https://poloniex.com/public?command=returnTicker').then(result => {
        console.log("Poloniex",result.json());
      })
    }, 3000)
  }

  render() {
    return (
      <div>
        <h2>Poloniex</h2>
      </div>
    )
  }
}

export default Poloniex;
