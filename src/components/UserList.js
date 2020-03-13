import React, { Component } from 'react';

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
        headers.append('Authorization', getTokenType + getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                console.log(data.header);
                return
            })
            // console.log(res.json());
        })
        
        
    }
    render() {
        return (
            <div>
                <div>
                    <div>{this.props.getAccessToken}</div>
                </div>
            </div>
        );
    }
}

export default UserList;