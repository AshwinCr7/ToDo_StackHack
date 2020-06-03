import React , {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron, ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Exercise from './Exercise';
import Navs from './Nav';
import axios from "axios";

class NewExercise extends Component{

	constructor(props) {
        super(props); 
            this.toggledrop = this.toggledrop.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
            	dropdownOpen : false,
            }
    }

    handleSubmit(event){
      event.preventDefault();
      axios.defaults.withCredentials = true ;
      axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

        axios.post("http://localhost:3001/tasks/newtask",{title : this.listname.value,label : this.category.value,status : "Pending..!!",due:this.due.value,task : this.todo.value})
            .then((res) => {
                if (res.status == 200) {
                    console.log(res.data);
                }
            })
  }

  toggledrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
        });
  }
	
	render(){
		return(
			<div>
			<Navs />
			<Jumbotron id = "jumbo">
			<Form id="new" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <b><Label htmlFor="listname" className="newlabel">NAME</Label></b>
                  <Input type="text" id="listname" name="listname"
                    innerRef={(input) => this.listname = input} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="category" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >CATEGORY</Label>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledrop} id="droptype">
	                  <DropdownToggle color="primary" toggle={this.toggledrop} caret style={{fontSize: '18px'}} >Type</DropdownToggle>
	                  <DropdownMenu className="drop">
	                    <DropdownItem className="typelist">Home</DropdownItem>
	                    <DropdownItem className="typelist">Work</DropdownItem>
	                    <DropdownItem className="typelist">Shop</DropdownItem>
	                    <DropdownItem className="typelist">Edu</DropdownItem>
	                    <DropdownItem className="typelist">Payments</DropdownItem>
	                  </DropdownMenu>
	              </ButtonDropdown>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="todo" className="newlabel">TODO</Label>
                  <Input type="text" id="todo" name="todo"
                    innerRef={(input) => this.todo = input} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="due" className="newlabel">DUE DATE</Label>
                  <Input type="date" id="due" name="due" max="2030-01-01" innerRef={(input) => this.due = input}/>
                </FormGroup>
                <Button type="submit" value="submit" color="primary" id="add">Add</Button>
                <Button type="submit" value="submit" color="primary" id="sub">Submit</Button>
      </Form>      
      </Jumbotron>
	</div>			
		);
	}
}

export default NewExercise;