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
            .map((value) => {
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