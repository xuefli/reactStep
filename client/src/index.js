import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import { Remote, printRemote} from './Test';
import HelloTs from './HelloTs';

import Child from './child';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

printRemote({url: "http://test.com", param: {userName: 'test', passwd: 'test1'}});

document.body.appendChild(component());

class Hello extends React.Component {
  render() {
    return (
    <div>
      Hello {this.props.toWhat}
      <Child/>
      <HelloTs/>
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