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

const buttonName = [
  'AC',
  '+/-',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '='
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      sum: 99
    }
  }

  clickHandle = (value) => {

    switch (value) {
      case 'C':
        this.setState({value: '0'});
        buttonName[0] = "AC";
        break;
      case 'AC':
        this.setState({value: '0', sum: 0});
        buttonName[0] = "AC"
        value:
        break;
      case '+':
        this.setState({
          sum: Number(this.state.value),
          value: 0
        });
        break;
      case '=':
        this.setState({value: this.state.sum});
        break;
      default:
        this.setState({
          value: this.state.value + value
        });
        buttonName[0] = "C";
        break;
    }
    console.log('sum: ' + this.state.sum + '\nvalue: ' + this.state.value + '\nclick value: ' + value);
  }

  render() {

    return (
      <div style={container}>
        <Monitor value={this.state.value}/>
        <ButtonGroup buttonName={buttonName} onClick={this.clickHandle}/>
      </div>
    );
  }
}

export default App;
