import React, { Component } from 'react';
import '../App.css';
// import Hello from './Hello.js';
export class Submit extends Component {
    constructor(props){
        super(props);
        this.state= {
          uname : '',
          psw : '',
          contact : [],
          render : 'block',
          isAccess : false,
          
        }
      }
      handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        });
      }
      setUser = (params,acToken,tokenType,isRender) =>{
        this.props.onDisplayUser(params,acToken,tokenType,isRender);
        // console.log(params);
      }
      handleSubmit=(event)=> {
        
        var {uname,psw} = this.state;
        console.log('Username: ' + uname + ' pass: ' + psw);
        event.preventDefault();
        const url ='http://test.itechcorp.com.vn:38765/auth/oauth/token';
        // const data = { username:this.state.uname, password:this.state.psw, grant_type:'password' }
        let username = 'operation_portal';
        let password = 'iTech1234';
        let headers = new Headers();
        let formdata = new FormData();
        formdata.append('grant_type','password');
        formdata.append('username',this.state.uname);
        formdata.append('password',this.state.psw);
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
        fetch(url, { method: 'POST',
        body: formdata, 
        headers:headers})
        .then(res => {
          
          if (res.status === 200) {
            // var access_token = '';
            // this.setState({
            //   render : 'none'
            // })
            return res.json().then((data) => {  
              // console.log(data.access_token);
              return this.setUser(this.state.uname,data.access_token,data.token_type,'none');
            }); 
            // return this.setUser(this.state.uname);
          }
        })
        .catch(error => console.error('Error:', error))
      }
        
    render() {
        var {render} = this.state;
        return (
            <div className="">
                <div style={{display:this.props.onDisplaySubmit,border:"1px solid red"}}>
                    <form action="" method='post' onSubmit={this.handleSubmit}>
                        <div className="container-fake container">
                        <div className="username">
                            <label htmlFor=""><b>Username:</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" value={this.state.uname} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor=""><b>Password:</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={this.handleChange}  required/>
                        </div>
                        <div style={{display: "flex"}}>
                            <input type="submit" value="Submit" className="button" onClick={this.loginForm}/>
                            {/* <a style={{color:"white"}} className="button">Xem thông tin cá nhân</a> */}
                        </div>
                        </div>
                    </form>
                </div>
                {/* <div style={{display:render,float:'right'}}>Xin chào {this.state.uname}</div> */}
              </div>
        );
    }
}

export default Submit;
