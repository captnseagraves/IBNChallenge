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


          <h2>Welcome to BitTracker</h2>


        <Grid>
          <Row className="show-grid exRow">
            <Col xs={12} md={4} className="exchange"><code> <Poloniex /> </code></Col>
            <Col xs={6} md={4} className="exchange"><code> <CoinCap /> </code></Col>
            <Col xs={6} md={4} className="exchange"><code> <Kraken /> </code></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home;
