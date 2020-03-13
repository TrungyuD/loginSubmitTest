import React, { Component } from 'react';

export class Hello extends Component {
    render() {
        return (
            <div style={{textAlign:"right"}}>
                Xin chào ({this.props.user})
            </div>
        );
    }
}

export default Hello;
