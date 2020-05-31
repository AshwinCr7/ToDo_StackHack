import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import {BrowserRouter, Switch, Route, Redirect,Router } from "react-router-dom";
import Excercise from './Excercise';
const loc = {
    location : {
        state : false
    }
};
class Main extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/:userId/exercises" component={(props) => <Excercise  history={loc}/>}/>
                </Switch>
            </div>
            
        );
    }
}

export default Main;