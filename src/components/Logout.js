import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class Logout extends Component {

    constructor(props) {
        super(props);
        
    }
    
    setLogout = (params)=> {
        return this.props.onLogout(params);
    }
    render() {
        return (
            <div>
                <div style={{textAlign:"right",padding:"10px 0px 10px 10px", borderBottom:"1px solid red"}}>
                    <Button onClick={()=>{this.setLogout('block')}} variant="outline-danger">Logout</Button>
                </div>
            </div>
        );
    }
}

export default Logout;