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
      CoinCap_LTC: "0.00000000"
    };
  }

  componentWillMount = () => {
    setInterval(() => {
      console.log('another');
      fetch('http://localhost:3001/latestData').then(result => {
        return result.json()
      })
      .then((result2) => {
        this.setState({
          Kraken_LTC: Number(result2[0].kraken[0].ask.price).toFixed(8),
          Kraken_DASH: Number(result2[0].kraken[1].ask.price).toFixed(8),
          Kraken_ETH: Number(result2[0].kraken[2].ask.price).toFixed(8),
          Poloniex_LTC: result2[1].poloniex[0].lowestAsk,
          Poloniex_DASH: result2[1].poloniex[2].lowestAsk,
          Poloniex_ETH: result2[1].poloniex[1].lowestAsk,
          CoinCap_LTC: (result2[2].coincap[2].price_btc).toFixed(8),
          CoinCap_DASH: (result2[2].coincap[1].price_btc).toFixed(8),
          CoinCap_ETH: (result2[2].coincap[0].price_btc).toFixed(8)
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
            <Col xs={12} md={4} className="exchange"><code> <Poloniex Poloniex_LTC={this.state.Poloniex_LTC} Poloniex_DASH={this.state.Poloniex_DASH} Poloniex_ETH={this.state.Poloniex_ETH}/> </code></Col>
            <Col xs={12} md={4} className="exchange"><code> <CoinCap CoinCap_LTC={this.state.CoinCap_LTC} CoinCap_DASH={this.state.CoinCap_DASH} CoinCap_ETH={this.state.CoinCap_ETH}/> </code></Col>
            <Col xs={12} md={4} className="exchange"><code> <Kraken Kraken_LTC={this.state.Kraken_LTC} Kraken_DASH={this.state.Kraken_DASH} Kraken_ETH={this.state.Kraken_ETH}/> </code></Col>
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
