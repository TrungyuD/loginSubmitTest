import React, { Component } from 'react';
// import Main from './Main.js';
import Submit from './components/Submit.js';
import Hello from './components/Hello.js';
import UserInfo from './components/UserInfo.js';
import UserList from './components/UserList.js';
import {Row, Col, Container} from 'react-bootstrap';
import Logout from './components/Logout.js';
// import { encode } from "base-64";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : "Bạn chưa đăng nhập",
      displayUser: false,
      access_token:'',
      token_type:'',
      userDisplayInfo : {},
      renderSubmit : 'block'
    }
  }
  onSetUser = (params,acToken,tokenType,isRender)=>{
    this.setState({
        userInfo : params,
        displayUser :true,
        access_token:acToken,
        token_type : tokenType,
        renderSubmit : isRender
    });
    // console.log(acToken);
    
  }
  setUserInfo = (params) => {
    this.setState({
      userDisplayInfo : params
    })
  }
  onSetLogout = (params) => {
        this.setState({
          renderSubmit : params,
          displayUser : false,
          userInfo : "Bạn chưa đăng nhập",
        })
        console.log('did');
  }
  showUser = () =>{
    if (this.state.displayUser){
      return <div>
      <Row>
        <Col lg={5}>
          <UserList 
            getAccessToken={this.state.access_token}
            getTokenType={this.state.token_type}
            displayUserInfo={this.setUserInfo}
             />
          </Col>
        <Col lg={7}>
          <UserInfo onDisplayInfo={this.state.userDisplayInfo} />
        </Col>
      </Row>
      </div>
    }
  }
  showLogout = () => {
    if(this.state.displayUser) {
      return <Logout onLogout={this.onSetLogout}/>
    }
  }
  render() {

    return (
      <div>
        <Hello user={this.state.userInfo}/>
        <div>
          {this.showLogout()}
        </div>
        <div>
          <Submit onDisplayUser={this.onSetUser}
                  onDisplaySubmit={this.state.renderSubmit}
          />
        </div>
        <div>
          {this.showUser()}
        </div>
        
      </div>
      
    );
  }
}
export default App;
