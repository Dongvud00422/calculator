import React from 'react';
import Button from './Button';
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

class ButtonGroup extends React.Component {
    clickHandle = (value) => {
        this
            .props
            .onClick(value);

    }

    render() {
        const buttonArr = buttonName.map((value) => {
            return <Button value={value} onClick={this.clickHandle}/>
        });
        return (
            <div className="buttonGroup">
                {buttonArr}
            </div>
        );
    }
}
export default ButtonGroup;