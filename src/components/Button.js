import React from 'react';

export default class Button extends React.Component {
    clickHandle = () => {
        this
            .props
            .onClick(this.props.value);
    }
    render() {
        return (
            <button className="btn" onClick={this.clickHandle}>
                {this.props.value}
            </button>
        );
    }
}