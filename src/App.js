import React, {Component} from 'react';
import './App.css';
import Monitor from './components/Monitor';
import ButtonGroup from './components/ButtonGroup';

const container = {
  "margin": "10px",
  width: "200px",
  height: "320px",
  "border": "1px solid #000000",
  "borderRadius": "5px",
  "boxShadow": "1px 1px 1px #000000"
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
      display: '0',
      operator: '',
      tmpOperator: '',
      tmp: '0',
      sum: ''
    }
  }

  clickHandle = (value) => {
    switch (value) {
      case 'C':
        this.setState({display: '0'});
        buttonName[0] = "AC";
        break;

      case 'AC':
        this.setState({display: '0', sum: ''});
        buttonName[0] = "AC"
        break;

      case '+':
        if (this.state.operator === '=') {
          this.setState({operator: '+', tmpOperator: '+'});
        } else if (this.state.operator === '+') {
          break;
        } else {
          this.setState({
            sum: Number(this.state.tmp) + Number(this.state.sum),
            display: Number(this.state.tmp) + Number(this.state.sum),
            operator: '+',
            tmpOperator: '+'
          }, () => {
            console.log(this.state.operator + '=' + this.state.sum);
          });
        }
        break;

      case '-':
        if (this.state.operator === '=') {
          this.setState({operator: '-', tmpOperator: '-'});
        } else if (this.state.operator === '-') {
          break;
        } else {
          this.setState({
            sum: (this.state.sum === '')
              ? Number(this.state.tmp)
              : Number(this.state.sum) - Number(this.state.tmp),
            display: (this.state.sum === '')
              ? Number(this.state.tmp)
              : Number(this.state.sum) - Number(this.state.tmp),
            operator: '-',
            tmpOperator: '-'
          }, () => {
            console.log(this.state.operator);
          });
        }
        break;

      case '*':
        if (this.state.operator === '=') {
          this.setState({operator: '*', tmpOperator: '*'});
        } else if (this.state.operator === '*') {
          break;
        } else {
          this.setState({
            sum: (this.state.sum === '')
              ? Number(this.state.tmp)
              : Number(this.state.tmp) * Number(this.state.sum),
            display: (this.state.sum === '')
              ? Number(this.state.tmp)
              : Number(this.state.tmp) * Number(this.state.sum),
            operator: '*',
            tmpOperator: '*'
          }, () => {
            console.log(this.state.operator);
          });
        }
        break;

      case '/':
        if (this.state.operator === '=') {
          this.setState({operator: '/', tmpOperator: '/'});
        } else if (this.state.operator === '/') {
          break;
        } else {
          this.setState({
            sum: (this.state.sum === '')
              ? Number(this.state.tmp)
              : Number(this.state.sum) / Number(this.state.tmp),
            display: (this.state.sum === '')
              ? Number(this.state.tmp)
              : Number(this.state.sum) / Number(this.state.tmp),
            operator: '/',
            tmpOperator: '/'
          }, () => {
            console.log(this.state.operator);
          });
        }
        break;

      case '=':
        switch (this.state.tmpOperator) {
          case '+':
            this.setState({
              sum: (Number(this.state.sum + Number(this.state.tmp))),
              display: (Number(this.state.sum + Number(this.state.tmp))),
              operator: '='
            });
            break;
          case '-':
            this.setState({
              sum: (Number(this.state.sum) - Number(this.state.tmp)),
              display: (Number(this.state.sum) - Number(this.state.tmp)),
              operator: '='
            });
            break;
          case '*':
            this.setState({
              sum: (Number(this.state.sum) * Number(this.state.tmp)),
              display: (Number(this.state.sum) * Number(this.state.tmp)),
              operator: '='
            });
            break;
          case '/':
            this.setState({
              sum: (Number(this.state.sum) / Number(this.state.tmp)),
              display: (Number(this.state.sum) / Number(this.state.tmp)),
              operator: '='
            });
            break;
        }
        break;

      default:
        buttonName[0] = "C";
        if (this.state.display === '0' || this.state.operator !== '') {
          this
            .setState({
              display: value,
              tmp: value,
              operator: ''
            }, function () {
              console.log('sum: ' + this.state.sum + '\ndisplay: ' + this.state.display);
            })
        } else {
          this.setState({
            display: this.state.display + value,
            tmp: this.state.display + value,
            operator: ''
          }, () => {
            console.log('sum: ' + this.state.sum + '\ndisplay: ' + this.state.display);
          });
        }

    }
  }

  render() {
    return (
      <div style={container}>
        <Monitor value={this.state.display}/>
        <ButtonGroup buttonName={buttonName} onClick={this.clickHandle}/>
      </div>
    );
  }
}

export default App;
