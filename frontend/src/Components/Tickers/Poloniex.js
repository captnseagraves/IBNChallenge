import React, { Component } from 'react';
import './Tickers.css';


class Poloniex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ETH: "0.00000000",
      DASH: "0.00000000",
      LTC: "0.00000000"
    };
  }

  // componentWillMount () {
  //
  //   setInterval(() => {
  //     fetch('https://poloniex.com/public?command=returnTicker').then(result => {
  //       // console.log('Polo', result.json());
  //       return result.json()
  //     }).then((result2) => {
  //       // console.log("Poloniex result2", result2.BTC_LTC.lowestAsk);
  //       this.setState({
  //         LTC: result2.BTC_LTC.lowestAsk,
  //         ETH: result2.BTC_ETH.lowestAsk,
  //         DASH: result2.BTC_DASH.lowestAsk
  //       })
  //     })
  //   }, 3000)
  // }

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
