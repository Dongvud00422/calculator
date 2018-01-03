import React from 'react';

class Monitor extends React.Component {

    render() {
        return (
            <div className="monitor">
                {this.props.value}
            </div>
        );
    }
}

export default Monitor;