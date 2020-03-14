import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // user : this.props.onDisplayInfo
        }
    }
    

    render() {
        const user=this.props.onDisplayInfo;
        const keyss=Object.keys(user);
        const elm = keyss.map((number)=>
            <tr>
                <td>{number}</td>
                <td>{JSON.stringify(user[number])}</td>
            </tr>
        )
        return (
            <div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>key</th>
                                <th>value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elm}
                        </tbody>
                    </Table>
                    {/* {JSON.stringify(this.props.onDisplayInfo)} */}
                </div>
            </div>
        );
    }
}

export default UserInfo;