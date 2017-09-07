import React, { Component } from 'react';
import './Tickers.css';



class CoinCap extends Component {


// componentWillMount = () => {
//   setInterval(() => {
//     fetch('https://www.coincap.io/page/ETH').then(result => {
//       return result.json()
//     }).then((result2) => {
//       // console.log("CoinCap ETH result2", result2.price_btc);
//       this.setState({
//         ETH: (result2.price_btc).toFixed(8)
//       })
//     })
//
//     fetch('https://www.coincap.io/page/LTC').then(result => {
//       return result.json()
//     }).then((result2) => {
//       // console.log("CoinCap LTC result2", result2.price_btc);
//       this.setState({
//         LTC: (result2.price_btc).toFixed(8)
//       })
//     })
//
//     fetch('https://www.coincap.io/page/DASH').then(result => {
//       return result.json()
//     }).then((result2) => {
//       console.log("CoinCap DASH result2", result2);
//       this.setState({
//         DASH: (result2.price_btc).toFixed(8)
//       })
//     })
//
//   }, 3000)
// }


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
