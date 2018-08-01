/* eslint-disable */
import React from 'react';

class Home extends React.Component {

  getClick() {
    alert("Hello World");
  }
  render() {

    return (
      <div style={{backgroundColor: "#b0bfc6", fontSize: "16px", textAlign: "center", cursor: "pointer"}}onClick={this.getClick.bind(this)}>Click Me</div>
    );
  }
}

export default Home;
