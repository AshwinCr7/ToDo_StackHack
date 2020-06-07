import React, { Component } from 'react';
import Home from './Home';
import NewExercise from './NewExercise';
import { Switch, Route } from "react-router-dom";
import Exercise from './Exercise';
import Done from './Done';
class Main extends Component {

    render() {
        return (            
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:userId/exercises" component={Exercise}/>
                    <Route exact path="/:userId/exercises/done" component={Done}/>
                    <Route exact path="/:userId/exercises/new" component={NewExercise}/>
                </Switch>            
        );
    }
}

export default Main;