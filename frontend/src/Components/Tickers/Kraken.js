import React, { Component } from 'react';
import './Tickers.css';


class Kraken extends Component {

componentWillMount = () => {
  setInterval(function() {
    fetch('https://api.kraken.com/0/public/Ticker?pair=ETHXBT').then(result => {
      console.log("Kraken",result.json());
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

                <h2>This is where Data will go</h2>

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
