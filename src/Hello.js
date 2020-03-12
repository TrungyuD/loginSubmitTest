import React, { Component } from 'react';

export class Hello extends Component {
    render() {
        return (
            <div style={{float:"right"}}>
                Xin chào ({this.props.user})
            </div>
        );
    }
}

export default Hello;
