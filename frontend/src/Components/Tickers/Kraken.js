import React, { Component } from 'react';
import './Tickers.css';


class Kraken extends Component {

  render() {
    return (
      <div>

          <div id="wrapper">

              <section id="main">
                <header>
                  <h1>Kraken</h1>
                </header>

                <hr />

                <h2>ETH {this.props.Kraken_ETH}</h2>
                <h2>LTC {this.props.Kraken_LTC}</h2>
                <h2>DASH {this.props.Kraken_DASH}</h2>

                <hr />

                <footer>
                  <ul className="actions">
                    <li><a href="https://www.kraken.com/charts" className="button">Go to Kraken</a></li>
                  </ul>
    						</footer>
              </section>

          </div>

      </div>
    )
  }
}

export default Kraken;
