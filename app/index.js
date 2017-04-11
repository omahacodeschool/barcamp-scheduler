var React = require('react');
var ReactDOM = require('react-dom');
var Barcamp = require('./components/row.js')

const box = {
  width: "300px",
  height: "300px",
  backgroundColor: "#eee",
  fontFamily: "Helvetica"
};

const title = {
  fontSize: "1.5em"
};

const categoryImage = {
  float: "right"
};

const name = {
  paddingTop: "25px",
  paddingLeft: "5px",
  float: "left",
  fontSize: "0.75em"
};

const clear = {
  clear: "both"
};

ReactDOM.render(<Barcamp />, document.getElementById('app'));