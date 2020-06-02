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
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:lname/display" component={DisplayExercise}/>
                    <Route exact path="/:userId/exercises" component={Exercise}/>
                    <Route path="/:userId/exercises/new" component={NewExercise}/>
                </Switch>
            
        );
    }
}

export default Main;