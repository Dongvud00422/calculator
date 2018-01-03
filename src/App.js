import React, {Component} from 'react';
import './App.css';
import Monitor from './components/Monitor';
import ButtonGroup from './components/ButtonGroup';

const container = {
  "margin": "10px",
  width: "200px",
  height: "320px",
  "border": "1px solid #000000",
  "border-radius": "5px",
  "box-shadow": "1px 1px 1px #000000"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1000,
      sum: 0
    }
  }

  clickHandle = value => {
    this.setState({
      value: this.state.value + value
    });
  }

  render() {
    return (
      <div style={container}>
        <Monitor value={this.state.value}/>
        <ButtonGroup onClick={this.clickHandle}/>
      </div>
    );
  }
}

export default App;
