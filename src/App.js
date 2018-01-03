import React, {Component} from 'react';
import './App.css';
import Monitor from './components/Monitor';
import ButtonGroup from './components/ButtonGroup';

const container = {
  width: "240px",
  height: "320px",
  "border": "1px solid #000000",
  "border-radius": "50px"
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={container}>
        <Monitor/>
        <ButtonGroup/>
      </div>
    );
  }
}

export default App;
