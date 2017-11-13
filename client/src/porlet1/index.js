import React from 'react';
import ReactDom from 'react-dom';
import Component1 from '../components/Component1'

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