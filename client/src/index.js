import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import { Remote, printRemote} from './Test';
import HelloTs from './HelloTs';

import Child from './child';
import './style.css';
import Logo from './logo.svg';

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
      <img src='./log.svg'/>
      Hello {this.props.toWhat}
      <img src={Logo} style={{height: '30%', width: '30%'}}/>
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