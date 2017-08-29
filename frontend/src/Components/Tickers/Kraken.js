import React, { Component } from 'react';
import './Tickers.css';


class Kraken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ETH: "0.00000000",
      DASH: "0.00000000",
      LTC: "0.00000000"
    };
  }


componentWillMount() {


  setInterval(() => {
    fetch('https://api.kraken.com/0/public/Ticker?pair=ETHXBT').then(result => {
      return result.json()
    }).then((result2) => {
      console.log("Kraken result2", result2.result.XETHXXBT.a[0]);
      this.setState({
        ETH: result2.result.XETHXXBT.a[0]
      })
    })
  }, 3000)

  setInterval(() => {
    fetch('https://api.kraken.com/0/public/Ticker?pair=DASHXBT').then(result => {
      return result.json()
    }).then((result2) => {
      console.log("Kraken dash result2", result2.result.DASHXBT.a[0]);
      this.setState({
        DASH: result2.result.DASHXBT.a[0]
      })
    })
  }, 3000)

  setInterval(() => {
    fetch('https://api.kraken.com/0/public/Ticker?pair=LTCXBT').then(result => {
    return result.json()
    })
    .then((result2) => {
      console.log("Kraken LTC result2", result2.result.XLTCXXBT.a[0]);
      this.setState({
        LTC: result2.result.XLTCXXBT.a[0]
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
                  <h1>Kraken</h1>
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

export default Kraken;
