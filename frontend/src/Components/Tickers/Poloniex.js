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

  componentWillMount () {

    setInterval(() => {
      console.log('ETH', this.state.ETH);
      fetch('https://poloniex.com/public?command=returnTicker').then(result => {
        // console.log('Polo', result.json());
        return result.json()
      }).then((result2) => {
        console.log("Poloniex result2", result2.BTC_LTC.lowestAsk);
        this.setState({
          LTC: result2.BTC_LTC.lowestAsk,
          ETH: result2.BTC_ETH.lowestAsk,
          DASH: result2.BTC_DASH.lowestAsk
        })
      })
    }, 3000)
  }

  render() {
    return (
      <div>

          <div id="wrapper">

              <section id="main">
                <header>
                  <h1>Poloniex</h1>
                </header>

                <hr />

                <h2>ETH {this.state.ETH}</h2>
                <h2>LTC {this.state.LTC}</h2>
                <h2>DASH {this.state.DASH}</h2>

                <hr />

                <footer>
                  <ul className="actions">
                    <li><a href="#" className="button">Get Started</a></li>
                  </ul>
                </footer>
              </section>

          </div>

      </div>
    )
  }
}

export default Poloniex;
