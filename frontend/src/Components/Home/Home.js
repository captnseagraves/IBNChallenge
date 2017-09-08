import React, { Component } from 'react';
import './Home.css';
import {Grid, Col, Row} from 'react-bootstrap'

import Poloniex from '../Tickers/Poloniex.js'
import CoinCap from '../Tickers/CoinCap.js'
import Kraken from '../Tickers/Kraken.js'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Kraken_ETH: "0.00000000",
      Kraken_DASH: "0.00000000",
      Kraken_LTC: "0.00000000",
      Poloniex_ETH: "0.00000000",
      Poloniex_DASH: "0.00000000",
      Poloniex_LTC: "0.00000000",
      CoinCap_ETH: "0.00000000",
      CoinCap_DASH: "0.00000000",
      CoinCap_LTC: "0.00000000",
      lowest_LTC: "",
      lowest_DASH: "",
      lowest_ETH: ""
    };
  }


  componentWillMount = () => {
    setInterval(() => {
      console.log('another');
      fetch('http://localhost:3001/latestData').then(result => {
        return result.json()
      })
      .then((result2) => {

        let kraken_LTC = Number(result2[0].kraken_LTC.ask.price).toFixed(8);
        let kraken_DASH = Number(result2[1].kraken_DASH.ask.price).toFixed(8);
        let kraken_ETH = Number(result2[2].kraken_ETH.ask.price).toFixed(8);
        let poloniex_LTC = result2[3].poloniex_LTC.lowestAsk;
        let poloniex_DASH = result2[4].poloniex_DASH.lowestAsk;
        let poloniex_ETH = result2[5].poloniex_ETH.lowestAsk;
        let coinCap_LTC = (result2[6].coincap_LTC.price_btc).toFixed(8);
        let coinCap_DASH = (result2[7].coincap_DASH.price_btc).toFixed(8);
        let coinCap_ETH = (result2[8].coincap_ETH.price_btc).toFixed(8)

        this.setState({
          Kraken_LTC: kraken_LTC,
          Kraken_DASH: kraken_DASH,
          Kraken_ETH: kraken_ETH,
          Poloniex_LTC: poloniex_LTC,
          Poloniex_DASH: poloniex_DASH,
          Poloniex_ETH: poloniex_ETH,
          CoinCap_LTC: coinCap_LTC,
          CoinCap_DASH: coinCap_DASH,
          CoinCap_ETH: coinCap_ETH,
          lowest_LTC: Number(Math.min(kraken_LTC, poloniex_LTC, coinCap_LTC)).toFixed(8),
          lowest_DASH: Number(Math.min(kraken_DASH, poloniex_DASH, coinCap_DASH)).toFixed(8),
          lowest_ETH: Number(Math.min(kraken_ETH, poloniex_ETH, coinCap_ETH)).toFixed(8)
        })

      })
    }, 3000)


  }

  render() {
    return (
      <div>

          <h1 className="header color">BitTracker</h1>

          <p className="intro color">Up-to-date prices for BitCoin to crypto-currency conversions from three top exchanges</p>

        <Grid>
          <Row className="show-grid exRow">
            <Col xs={12} md={4} className="exchange"><code> <Poloniex Poloniex_LTC={this.state.Poloniex_LTC} Poloniex_DASH={this.state.Poloniex_DASH} Poloniex_ETH={this.state.Poloniex_ETH} lowest_LTC={this.state.lowest_LTC} lowest_DASH={this.state.lowest_DASH} lowest_ETH={this.state.lowest_ETH}/> </code></Col>
            <Col xs={12} md={4} className="exchange"><code> <CoinCap CoinCap_LTC={this.state.CoinCap_LTC} CoinCap_DASH={this.state.CoinCap_DASH} CoinCap_ETH={this.state.CoinCap_ETH} lowest_LTC={this.state.lowest_LTC} lowest_DASH={this.state.lowest_DASH} lowest_ETH={this.state.lowest_ETH}/> </code></Col>
            <Col xs={12} md={4} className="exchange"><code> <Kraken Kraken_LTC={this.state.Kraken_LTC} Kraken_DASH={this.state.Kraken_DASH} Kraken_ETH={this.state.Kraken_ETH} lowest_LTC={this.state.lowest_LTC} lowest_DASH={this.state.lowest_DASH} lowest_ETH={this.state.lowest_ETH}/> </code></Col>
          </Row>
        </Grid>


        <footer id="footer">
          <ul className="copyright">
            <li>**Prices updated at three second intervals and may not represent price at time of purchase**</li> <br></br>
            <li>&copy; Kevin Seagraves 2017</li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Home;
