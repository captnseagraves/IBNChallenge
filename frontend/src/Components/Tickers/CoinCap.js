import React, { Component } from 'react';
import './Tickers.css';



class CoinCap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ETH: "0.00000000",
      DASH: "0.00000000",
      LTC: "0.00000000"
    };
  }

componentWillMount = () => {
  setInterval(() => {
    fetch('https://www.coincap.io/page/ETH').then(result => {
      return result.json()
    }).then((result2) => {
      console.log("CoinCap ETH result2", result2.price_btc);
      this.setState({
        ETH: result2.price_btc
      })
    })

    fetch('https://www.coincap.io/page/LTC').then(result => {
      return result.json()
    }).then((result2) => {
      console.log("CoinCap LTC result2", result2.price_btc);
      this.setState({
        LTC: result2.price_btc
      })
    })

    fetch('https://www.coincap.io/page/DASH').then(result => {
      return result.json()
    }).then((result2) => {
      console.log("CoinCap DASH result2", result2.price_btc);
      this.setState({
        DASH: result2.price_btc
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
    							<h1>CoinCap</h1>
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

    					<footer id="footer">
    						<ul className="copyright">
    							<li>&copy; Kevin Seagraves 2017</li>
    						</ul>
    					</footer>

    			</div>

      </div>
    )
  }
}

export default CoinCap;
