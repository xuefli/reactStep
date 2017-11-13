import React from 'react';
import ReactDom from 'react-dom';
import Component1 from '../components/Component1'
// import '../style.css';
import './style.css';

class Porlet1 extends React.Component {
  render() {
    return (
    <div>
      <p>porlet1</p>
      <Component1/>
    </div>
  );
  }
}
ReactDom.render(
  <Porlet1/>,
  document.getElementById("root")
);