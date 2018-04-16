import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import api from '../api';


class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
    api.get_price({type: 'BTC'});
    console.log("in index");
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=3f5fd06a9f2649509496747b889aee2b')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log("data is", data);
      let news = data.articles.map((n, index) => {
        if (index < 5) {
          return(
            <div key={index} className="news-body">
              <div id="landing-header">
                <h1 className="h3"><a href={n.url}>{n.title}</a></h1>
              </div>
              <div id="landing-message">
                <p>
                  {n.description}
                </p>
              </div>
            </div>
          )
        }
      })
      this.setState({news: news});
      console.log("state", this.state.news);
    })
  }

  render() {
    return <div className="index">
      <div id="order-book" style={{display: "block"}}>
        <div>
          <dl className="stats-panel">
            <div className="stat">
              <div id="currency-pair">
                <h4>BTC/USD</h4>
              </div>
            </div>
            <div className="stat">
              <dt>Last Price</dt>
              <dd>
                $
                {this.props.prices.BTC[this.props.prices.BTC.length-1]}
                <span className="btc-suffix"></span>
              </dd>
            </div>
            <div className="stat">
              <dt>24-hour Change</dt>
              <dd>
                +
                $
                76.53
                <span className="btc-suffix"></span>
              </dd>
            </div>
            <div className="stat" id="stat-24h-range">
              <dt>24-hour Range</dt>
              <dd>
                $
                6651.12
                <span className="btc-suffix"></span>
                -
                $
                6876.33
                <span className="btc-suffix"></span>
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <dl className="stats-panel">
            <div className="stat">
              <div id="currency-pair">
                <h4>ETH/USD</h4>
              </div>
            </div>
            <div className="stat">
              <dt>Last Price</dt>
              <dd>
                $
                6845.01
                <span className="btc-suffix"></span>
              </dd>
            </div>
            <div className="stat">
              <dt>24-hour Change</dt>
              <dd>
                +
                $
                76.53
                <span className="btc-suffix"></span>
              </dd>
            </div>
            <div className="stat" id="stat-24h-range">
              <dt>24-hour Range</dt>
              <dd>
                $
                6651.12
                <span className="btc-suffix"></span>
                -
                $
                6876.33
                <span className="btc-suffix"></span>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <dl className="stats-panel">
            <div className="stat">
              <div id="currency-pair">
                <h4>LTC/USD</h4>
              </div>
            </div>
            <div className="stat">
              <dt>Last Price</dt>
              <dd>
                $
                6845.01
                <span className="btc-suffix"></span>
              </dd>
            </div>
            <div className="stat">
              <dt>24-hour Change</dt>
              <dd>
                +
                $
                76.53
                <span className="btc-suffix"></span>
              </dd>
            </div>
            <div className="stat" id="stat-24h-range">
              <dt>24-hour Range</dt>
              <dd>
                $
                6651.12
                <span className="btc-suffix"></span>
                -
                $
                6876.33
                <span className="btc-suffix"></span>
              </dd>
            </div>
          </dl>
        </div>


      </div>

      <div className="text offset-lg-1 col-lg-6 col-md-12">
        {this.state.news}
      </div>
    </div>
  }
}

const Index = withRouter(connect((state) => ({
  prices: state.prices,
}))(IndexComponent));

export default Index;
