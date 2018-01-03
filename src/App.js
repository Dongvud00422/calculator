import React, {Component} from 'react';
import './App.css';
import Monitor from './components/Monitor';

const container = {
  width: "300px",
  height: "300px",
  border: "1px solid #000000"
}

class App extends Component {
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
