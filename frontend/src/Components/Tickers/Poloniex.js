import React, { Component } from 'react';
import './Tickers.css';


class Poloniex extends Component {

  render() {
    return (
      <div>

          <div id="wrapper">

              <section id="main">
                <header>
                  <h1>Poloniex</h1>
                </header>

                <hr />

                <h2>ETH {this.props.Poloniex_ETH}</h2>
                <h2>LTC {this.props.Poloniex_LTC}</h2>
                <h2>DASH {this.props.Poloniex_DASH}</h2>

                <hr />

                <footer>
                  <ul className="actions">
                    <li><a href="https://poloniex.com/exchange#btc_eth" className="button">Go to Poloniex</a></li>
                  </ul>
                </footer>
              </section>

          </div>

      </div>
    )
  }
}

export default Poloniex;
