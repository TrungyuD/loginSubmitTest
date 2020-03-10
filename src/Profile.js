import React, { Component } from 'react';
import './App.css';
export class Profile extends Component {
    constructor(props){
        super(props);
        let comments = JSON.parse(localStorage.getItem('myData'));
        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');
        this.state = {
            myData : comments,
            username : username,
            password : password
        }
    }
    
    render() {
        const {myData}=this.state;
        const keyss=Object.keys(myData);
        const elm = keyss.map((number)=>
            <tr>
                <td>{number}</td>
                <td>{JSON.stringify(myData[number])}</td>
            </tr>
        )
        return (
            <div>
               <table>
                   <tr>
                       <th>key</th>
                       <th>value</th>
                   </tr>
                    <tr>
                        <td>username</td>
                        <td>{this.state.username}</td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>{this.state.password}</td>
                    </tr>
                    {elm}
               </table>
               {/* <ol>
                   {elm}
               </ol> */}
            </div>
        );
    }
}

export default Profile;
