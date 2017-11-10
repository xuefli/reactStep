import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';

import Child from './child';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class Hello extends React.Component {
  render() {
    return (
    <div>
      Hello {this.props.toWhat}
      <Child/>
    </div>
    );
  }
}


ReactDom.render(
  <Hello toWhat="the world"/>,
  // React.createElement('p', null, 'hello the world'),
  // <div>hello the world by jsx</div>,
  document.getElementById("root")
);