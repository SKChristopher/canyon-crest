import React, { Component } from 'react';

import Navbar from './Navbar.jsx';
import Test from './Test.jsx';
import './../styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText() {
    const obj = Object.assign({}, this.state);
    let text = obj.text;

    if (text === '') text = 'hi';
    else text = '';

    this.setState({ text });
  }

  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Test writing={this.state.text} changeText={this.changeText} />
        <div id="title"> Canyon Crest Construction </div>
      </div>
    )
  }
}

export default App;
