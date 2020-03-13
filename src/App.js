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
      displayUser: false,
      access_token:'',
      token_type:''
    }
  }
  onSetUser = (params,acToken,tokenType)=>{
    this.setState({
        userInfo : params,
        displayUser :true,
        access_token:acToken,
        token_type : tokenType
    });
    console.log(acToken);
    
  }
  showUser = () =>{
    if (this.state.displayUser){
      return <Container>
      <Row>
        <Col>
          <UserList 
            getAccessToken={this.state.access_token}
            getTokenType={this.state.token_type} />
          </Col>
        <Col><UserInfo /></Col>
      </Row>
    </Container>
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
          {this.showUser()}
        </div>
        
      </div>
      
    );
  }
}
export default App;
