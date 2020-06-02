import React, { Component } from 'react';
import axios from "axios";
import Navs from './Nav';
import Display from './DisplayExercise';
import NewExercise from './NewExercise';
import {BrowserRouter, Switch, Route, Redirect,Router } from "react-router-dom";
import { Form, FormGroup, Label, ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Exercise extends Component {
    constructor(props) {
        super(props);

        this.toggledrop = this.toggledrop.bind(this);
        this.state = {   
            dropdownOpen : false,  
            dropdownOpen1 : false, 
            userId:this.props.match.params.userId,
            exercises : []
        };
        console.log(localStorage.getItem("token"));
        axios.defaults.withCredentials = true ;
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

        axios.get("http://localhost:3001/tasks/" + localStorage.getItem("userId"))
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
                    console.log( "Whatis" + this.state.exercises);
                }
            })
    }     
            
    toggledrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
        });
    }   

    render() {
            console.log(this.props.match.params.userId);
            return (
                <div>
            	<Navs userId={localStorage.getItem("userId")}/>
                    <Form>                            
                        <FormGroup className="exer">
                          <Label style={{margin: '100px 0px 0px 0px'}} htmlFor="category" className="exlabel">TYPE</Label>
                          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledrop} id="droptype">
                          <DropdownToggle color="warning" toggle={this.toggledrop} caret >Type</DropdownToggle>
                          <DropdownMenu >
                            <DropdownItem className="typelist"></DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                        </FormGroup>                                                   
                    </Form>
                <Display exercise = {this.state.exercises}/>
                </div>
            );
    }
}


export default Exercise;