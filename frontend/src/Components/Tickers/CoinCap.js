import React, { Component } from 'react';
import './Tickers.css';



class CoinCap extends Component {

componentWillMount = () => {
  setInterval(function() {
    fetch('https://www.coincap.io/page/BTC').then(result => {
      console.log("CoinCap", result.json());
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

                <h2>This is where Data will go</h2>

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
