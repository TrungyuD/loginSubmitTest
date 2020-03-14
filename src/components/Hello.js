import React, { Component } from 'react';

export class Hello extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div style={{textAlign:"right", border:"1px solid red"}}>
                Xin chào ({this.props.user})
            </div>
        );
    }
}

export default Hello;
