import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import '../App.css';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUserInfo : []
        }
    }
    componentWillMount(){
        const {getTokenType, getAccessToken} = this.props;
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/user';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                this.setState({
                    dataUserInfo : data.body
                })
                // console.log(this.state.dataUserInfo);
                return
            })
            // console.log(res.json());
        })
    }
    getData = () => {
        const {dataUserInfo} =this.state;
        return dataUserInfo.map((value,key)=>
        {
            // console.log(dataUserInfo);
            // var person = value.person;
            // console.log(person);
            return <tr key={key} onClick = {()=> {
                this.onDislayInfo(value);
            }}>
            <td>{value.id}</td>
            <td>{value.username}</td>
            <td>{value.email}</td>
            <td>{value.phoneNumber}</td> 
            </tr>
        }
        );
    }
    onDislayInfo = (params) => {
        console.log(params);
        this.props.displayUserInfo(params);
    }
    render() {
        return (
            <div>
                <div className="table-list-user">
                    <Table style={{border:"1px solid red !important"}}>
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>Username</th>
                            <th>email</th>
                            <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getData()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default UserList;