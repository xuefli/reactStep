import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

/*
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
*/

ReactDom.render(
  /*<Hello toWhat="the world"/>,*/
  React.createElement('p', null, 'hello the world'),
  document.getElementById("root")
);