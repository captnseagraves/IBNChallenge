import React, { Component } from 'react';
import './Home.css';
import {Grid, Col, Row} from 'react-bootstrap'

import Poloniex from '../Tickers/Poloniex.js'
import CoinCap from '../Tickers/CoinCap.js'
import Kraken from '../Tickers/Kraken.js'

class Home extends Component {
  render() {
    return (
      <div>

          <h1 className="header color">BitTracker</h1>

          <p className="intro color">Up-to-date prices for BitCoin to crypto-currency conversions from three top exchanges</p>

        <Grid>
          <Row className="show-grid exRow">
            <Col xs={12} md={4} className="exchange"><code> <Poloniex /> </code></Col>
            <Col xs={12} md={4} className="exchange"><code> <CoinCap /> </code></Col>
            <Col xs={12} md={4} className="exchange"><code> <Kraken /> </code></Col>
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
