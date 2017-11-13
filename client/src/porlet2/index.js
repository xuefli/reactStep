import React from 'react';
import ReactDom from 'react-dom';
import Component1 from '../components/Component1'
import '../style.css';
import './style.css';

class Porlet2 extends React.Component {
  render() {
    return (
    <div>
      <p>porlet2</p>
      <Component1/>
    </div>
  );
  }
}

ReactDom.render(
  <Porlet2/>,
  document.getElementById("root")
);