import React, { Component } from 'react';


class Poloniex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    lowest_LTC: "",
    lowest_DASH: "",
    lowest_ETH: ""
    };
  }

  componentWillReceiveProps = () => {

    this.props.Poloniex_LTC === this.props.lowest_LTC ? this.setState({
      lowest_LTC: "green"
    }) : this.setState({
      lowest_LTC: ""
    })

    this.props.Poloniex_DASH === this.props.lowest_DASH ? this.setState({
      lowest_DASH: "green"
    }) : this.setState({
      lowest_DASH: ""
    })

    this.props.Poloniex_ETH === this.props.lowest_ETH ? this.setState({
      lowest_ETH: "green"
    }) : this.setState({
      lowest_ETH: ""
    })

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

                <h2 className={this.state.lowest_ETH} >ETH {this.props.Poloniex_ETH}</h2>
                <h2 className={this.state.lowest_LTC}>LTC {this.props.Poloniex_LTC}</h2>
                <h2 className={this.state.lowest_DASH}>DASH {this.props.Poloniex_DASH}</h2>

                <hr />

                <footer>
                  <a href="https://poloniex.com/exchange#btc_eth" className="button">Go to Poloniex</a>
                </footer>
              </section>

          </div>

      </div>
    )
  }
}

export default Poloniex;
