var React = require('react');
var RowByTime = require('./row.js');
var Radium = require('radium');
var StyleRoot = Radium.StyleRoot;
var api = APP_CONFIG.api_url;

var App = React.createClass({
  interval: null,

  getInitialState: function() {
    return {
      time: [],
      info: {}
    }
  },
  componentDidMount: function () {
    this.getUpdate();
    if (window.innerWidth < 576) {
      this.interval = null;
    } else {
      this.interval = setInterval(function(){
        this.getUpdate();
        }.bind(this), 1000);
    }
  },
  getUpdate: function() {
    var _this = this;
    xhr = new XMLHttpRequest();
    xhr.open('GET', api + '/getdata');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      response = JSON.parse(xhr.responseText);
      _this.setState({time: Object.keys(response), info: response});
    }
    xhr.send();
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    var allRows = this.state.time.map((time) =>
      <RowByTime key={time} time={time} info={this.state.info[time]} />
    );

    return(
      <StyleRoot>
        {allRows}
      </StyleRoot>

      )
    }
  });

module.exports = App;