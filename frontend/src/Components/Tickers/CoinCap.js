import React, { Component } from 'react';
import './Tickers.css';



class CoinCap extends Component {

  render() {
    return (
      <div>

    			<div id="wrapper">

    					<section id="main">
    						<header>
    							<h1>CoinCap</h1>
    						</header>

    						<hr />

                <h2>ETH {this.props.CoinCap_ETH}</h2>
                <h2>LTC {this.props.CoinCap_LTC}</h2>
                <h2>DASH {this.props.CoinCap_DASH}</h2>

    						<hr />

    						<footer>
                  <ul className="actions">
                    <li><a href="https://coinmarketcap.com/" className="button">Go to CoinCap</a></li>
                  </ul>
    						</footer>
    					</section>



    			</div>

      </div>
    )
  }
}

export default CoinCap;
