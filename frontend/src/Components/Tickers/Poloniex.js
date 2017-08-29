import React, { Component } from 'react';
import './Tickers.css';


class Poloniex extends Component {

  componentWillMount () {

    setInterval(function() {
      fetch('https://poloniex.com/public?command=returnTicker').then(result => {
        console.log("Poloniex",result.json());
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

export default Poloniex;
