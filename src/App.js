import React, { Component } from 'react';
// import Main from './Main.js';
import Submit from './Submit.js';
import Hello from './Hello.js';
// import { encode } from "base-64";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : "Bạn chưa đăng nhập"
    }
  }
  onSetUser = (params)=>{
    this.setState({
        userInfo : params
    });
}
  render() {

    return (
      <div>
        <Hello user={this.state.userInfo}/>
        <Submit onDisplayUser={this.onSetUser}/>
      </div>
      
    );
  }
}
export default App;
