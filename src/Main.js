import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Submit from './Submit.js';
import Profile from './Profile.js';
export class Main extends Component {
    render() {
        return (
            <div>
                 <Switch>
                    <Route exact path='/' component={Submit}/>
                    <Route exact path='/profile' component={Profile} />
                </Switch>  
            </div>
        );
    }
}

export default Main;
