import React, { Component } from 'react';
import './Tickers.css';


class Kraken extends Component {
  constructor(props) {
    super(props);
    this.state = {
    lowest_LTC: "",
    lowest_DASH: "",
    lowest_ETH: ""
    };
  }

  componentWillReceiveProps = () => {
    console.log(this.props);
    
    if (this.props.Kraken_LTC === this.props.lowest_LTC) {
      this.setState({
        lowest_LTC: "green"
      })
    } else if (this.props.Kraken_LTC !== this.props.lowest_LTC) {
      this.setState({
        lowest_LTC: ""
      })
    }

    if (this.props.Kraken_DASH === this.props.lowest_DASH) {
      this.setState({
        lowest_DASH: "green"
      })
    } else if (this.props.Kraken_DASH !== this.props.lowest_DASH) {
      this.setState({
        lowest_DASH: ""
      })
    }

    if (this.props.Kraken_ETH === this.props.lowest_ETH) {
      this.setState({
        lowest_ETH: "green"
      })
    } else if (this.props.Kraken_ETH !== this.props.lowest_ETH) {
      this.setState({
        lowest_ETH: ""
      })
    }
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

                <h2 className={this.state.lowest_ETH} >ETH {this.props.Kraken_ETH}</h2>
                <h2 className={this.state.lowest_LTC} >LTC {this.props.Kraken_LTC}</h2>
                <h2 className={this.state.lowest_DASH} >DASH {this.props.Kraken_DASH}</h2>

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
