import React from 'react';

export default class Button extends React.Component {
    clickHandle = (event) => {
        this
            .props
            .onClick(event.target.value);
    }
    render() {
        return (
            <button
                type="button"
                value={this.props.value}
                className="btn"
                onClick={this.clickHandle}>
                {this.props.value}
            </button>
        );
    }
}