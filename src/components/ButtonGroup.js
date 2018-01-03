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

const buttonArr = buttonName.map(function (value) {
    return <Button btn={value}/>
});
class ButtonGroup extends React.Component {

    render() {
        return (
            <div className="buttonGroup">
                {buttonArr}
            </div>
        );
    }
}
export default ButtonGroup;