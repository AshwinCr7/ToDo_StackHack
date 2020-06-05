import React, { Component } from 'react';
import axios from "axios";
import Navs from './Nav';
import Display from './DisplayExercise';
import { Label, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';


class Exercise extends Component {
    constructor(props) {
        super(props);

        this.toggledroptype = this.toggledroptype.bind(this);
        this.toggledroppriority = this.toggledroppriority.bind(this);
        this.changeValueextype = this.changeValueextype.bind(this);
        this.changeValueexpriority= this.changeValueexpriority.bind(this);
        this.state = {   
            dropdownOpentype : false, 
            dropdownOpenpriority : false,
            dropDownValueextype : 'Type',
            dropDownValueexpriority : 'Priority',
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

    changeValueextype(e) {
  		this.setState({dropDownValueextype: e.currentTarget.textContent})
	  }

	changeValueexpriority(e) {
		this.setState({dropDownValueexpriority: e.currentTarget.textContent})
    }

    render() {
            console.log(this.props.match.params.userId);
            return (
            <div>
            <Navs userId={localStorage.getItem("userId")}/>       
                <div id="search">            	             
                  <b><Label htmlFor="category" className="exlabel">CATEGORY</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpentype} toggle={this.toggledroptype} id="exdroptype">
                  <DropdownToggle color="warning" toggle={this.toggledroptype} caret style={{fontSize: '19px'}}>{this.state.dropDownValueextype}</DropdownToggle>
                  <DropdownMenu className="drop">
                    <DropdownItem className="typelist" onClick={this.changeValueextype} >Home</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist" onClick={this.changeValueextype} >Work</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist" onClick={this.changeValueextype} >Shopping</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist" onClick={this.changeValueextype} >Edu</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist" onClick={this.changeValueextype} >Payments</DropdownItem>
                    <hr/>
                    <DropdownItem className="typelist" onClick={this.changeValueextype} >Misc</DropdownItem>
                  </DropdownMenu>
                  </ButtonDropdown>

                  <b><Label htmlFor="category" className="exlabel" style={{marginLeft: '20px'}} >DUE DATE</Label></b>

                  <Input type="date" className="input" id="exdue" name="exdue" max="2030-01-01" innerRef={(input) => this.exdue = input}/>

                  <b><Label htmlFor="priority" className="exlabel" style={{marginLeft: '20px'}} >PRIORITY</Label></b>

                  <ButtonDropdown isOpen={this.state.dropdownOpenpriority} toggle={this.toggledroppriority} id="exdroppriority">
                    <DropdownToggle color="warning" toggle={this.toggledroppriority} caret style={{fontSize: '19px'}} >{this.state.dropDownValueexpriority}</DropdownToggle>
                    <DropdownMenu className="drop">
                      <DropdownItem className="typelist" onClick={this.changeValueexpriority} >High</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist" onClick={this.changeValueexpriority} >Medium</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist" onClick={this.changeValueexpriority} >Low</DropdownItem>
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