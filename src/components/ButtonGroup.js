import React from 'react';
import Button from './Button';

class ButtonGroup extends React.Component {
    clickHandle = (value) => {
        this
            .props
            .onClick(value);
    }

    render() {
        const buttonArr = this
            .props
            .buttonName
            .map((value, index) => {
                return <Button value={value} key={index} onClick={this.clickHandle}/>
            });
        return (
            <div className="buttonGroup">
                {buttonArr}
            </div>
        );
    }
}
export default ButtonGroup;