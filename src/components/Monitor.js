import React from 'react';

class Monitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div className="monitor">
                {this.state.value}
            </div>
        );
    }
}

export default Monitor;