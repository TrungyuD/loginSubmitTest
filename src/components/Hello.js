import React, { Component } from 'react';

export class Hello extends Component {
    render() {
        return (
            <div style={{textAlign:"right", border:"1px solid red"}}>
                Xin chào ({this.props.user})
            </div>
        );
    }
}

export default Hello;
