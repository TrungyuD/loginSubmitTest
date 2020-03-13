import React, { Component } from 'react';
// import Main from './Main.js';
import Submit from './components/Submit.js';
import Hello from './components/Hello.js';
import UserInfo from './components/UserInfo.js';
import UserList from './components/UserList.js';
import {Row, Col, Container} from 'react-bootstrap';
// import { encode } from "base-64";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : "Bạn chưa đăng nhập",
      displayUser: false
    }
  }
  onSetUser = (params)=>{
    this.setState({
        userInfo : params,
        displayUser :true
    });
  }
  showUserList = () =>{
    if (this.state.displayUser){
      return <UserList />
    }
  }
  showUserInfo = () =>{
    if (this.state.displayUser){
      return <UserInfo />
    }
  }
  render() {

    return (
      <div>
        <Hello user={this.state.userInfo}/>
        <div>
          <Submit onDisplayUser={this.onSetUser}/>
        </div>
        <div>
          <Container>
            <Row>
              <Col>{this.showUserList()}</Col>
              <Col>{this.showUserInfo()}</Col>
            </Row>
          </Container>
        </div>
        
      </div>
      
    );
  }
}
export default App;
