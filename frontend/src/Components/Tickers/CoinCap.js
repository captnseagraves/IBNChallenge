import React, { Component } from 'react';


class CoinCap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    lowest_LTC: "",
    lowest_DASH: "",
    lowest_ETH: ""
    };
  }

  componentWillReceiveProps = () => {

    this.props.CoinCap_LTC === this.props.lowest_LTC ? this.setState({
      lowest_LTC: "green"
    }) : this.setState({
      lowest_LTC: ""
    })

    this.props.CoinCap_DASH === this.props.lowest_DASH ? this.setState({
      lowest_DASH: "green"
    }) : this.setState({
      lowest_DASH: ""
    })

    this.props.CoinCap_ETH === this.props.lowest_ETH ? this.setState({
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
    							<h1>CoinCap</h1>
    						</header>

    						<hr />

                <h2 className={this.state.lowest_ETH} >ETH {this.props.CoinCap_ETH}</h2>
                <h2 className={this.state.lowest_LTC} >LTC {this.props.CoinCap_LTC}</h2>
                <h2 className={this.state.lowest_DASH} >DASH {this.props.CoinCap_DASH}</h2>

    						<hr />

                    <a href="https://coinmarketcap.com/" className="button">Go to CoinCap</a>

    					</section>



    			</div>

      </div>
    )
  }
}

export default CoinCap;
