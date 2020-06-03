import React, { Component } from 'react';
import axios from "axios";
import Navs from './Nav';
import Display from './DisplayExercise';
import NewExercise from './NewExercise';
import {BrowserRouter, Switch, Route, Redirect,Router } from "react-router-dom";
import { Form, FormGroup, Label, ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';


class Exercise extends Component {
    constructor(props) {
        super(props);

        this.toggledroptype = this.toggledroptype.bind(this);
        this.toggledroppriority = this.toggledroppriority.bind(this);
        this.state = {   
            dropdownOpentype : false, 
            dropdownOpenpriority : false,
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
            
    toggledroptype() {
    this.setState({
      dropdownOpentype: !this.state.dropdownOpentype
        });
    }   

    toggledroppriority() {
    this.setState({
      dropdownOpenpriority: !this.state.dropdownOpenpriority
        });
  }

    render() {
            console.log(this.props.match.params.userId);
            return (
            <div>
            <Navs userId={localStorage.getItem("userId")}/>       
                <div id="search">            	             
                  <Label htmlFor="category" className="exlabel">CATEGORY</Label>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpentype} toggle={this.toggledroptype} id="exdroptype">
                  <DropdownToggle color="warning" toggle={this.toggledroptype} caret style={{fontSize: '19px'}}>Type</DropdownToggle>
                  <DropdownMenu className="drop">
                    <DropdownItem className="typelist">Home</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist">Work</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist">Shopping</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist">Edu</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist">Payments</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist">Payments</DropdownItem>
                  </DropdownMenu>
                  </ButtonDropdown>

                  <Label htmlFor="category" className="exlabel" style={{marginLeft: '20px'}} >DUE DATE</Label>

                  <Input type="date" id="exdue" name="exdue" max="2030-01-01" innerRef={(input) => this.exdue = input}/>

                  <Label htmlFor="priority" className="exlabel" style={{marginLeft: '20px'}} >PRIORITY</Label>

                  <ButtonDropdown isOpen={this.state.dropdownOpenpriority} toggle={this.toggledroppriority} id="exdroppriority">
                    <DropdownToggle color="warning" toggle={this.toggledroppriority} caret style={{fontSize: '19px'}} >Priority</DropdownToggle>
                    <DropdownMenu className="drop">
                      <DropdownItem className="typelist">High</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist">Medium</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist">Low</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown> 
                  </div>
                  <div>   
                <Display exercise = {this.state.exercises}/>
                </div>
            </div>
            );
    }
}


export default Exercise;