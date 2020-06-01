import React, { Component } from 'react';
import axios from "axios";
// import DisplayExcercise from './DisplayExcercise';
import NewExercise from './NewExercise';
import {BrowserRouter, Switch, Route, Redirect,Router } from "react-router-dom";

class Exercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exercises: [],
            userId:this.props.match.params.userId
        }
        axios.defaults.headers.common = { 'Authorization': `bearer ${this.props.location.state.token}` }

        axios.get("http://localhost:3001/tasks/" + this.props.match.params.userId)
            .then((res) => {
                if (res.status == 200) {
                    res.data.forEach(element => {
                        // this.setState({
                        //     exercises : [...this.state.exercises, element]
                        // })
                        this.setState(prevState => ({
                            exercises: [...prevState.exercises, element]
                        }))
                    });
                    console.log(this.state.exercises);
                }
            })


    }

    

    render() {
            console.log(this.props.match.params.userId);
            return (
                // <Redirect to={
                //     {
                //       pathname : "/" + this.state.userId+ "/exercises/new",
                //       state : {
                //         token : this.props.location.state.token
                //       }
                //     }
                //   }/>
                <p>fsjnsdjn</p>
            );
    }
}


export default Exercise;