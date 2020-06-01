import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import NewExercise from './NewExercise';
import DisplayExercise from './DisplayExercise';
import {BrowserRouter, Switch, Route, Redirect,Router } from "react-router-dom";
import Exercise from './Exercise';
class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (            
                <Switch>
                    <Route exact path="/" component={Exercise}/>
                    <Route exact path="/:userId/exercise" component={Exercise}/>
                    <Route exact path="/new" component={NewExercise}/>
                    <Route exact path="/:lname/display" component={DisplayExercise}/>
                </Switch>
            
        );
    }
}

export default Main;