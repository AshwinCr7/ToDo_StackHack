import React , {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron, ButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Exercise from './Exercise';
import Navs from './Nav';
import axios from "axios";

class NewExercise extends Component{

	constructor(props) {
        super(props); 
            this.toggledrop = this.toggledrop.bind(this);
            this.toggledroppriority = this.toggledroppriority.bind(this);
            this.toggledropstatus = this.toggledropstatus.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
            	dropdownOpen : false,
              dropdownOpenstatus : false,
              dropdownOpenpriority : false
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

  toggledropstatus() {
    this.setState({
      dropdownOpenstatus: !this.state.dropdownOpenstatus
        });
  }

  toggledroppriority() {
    this.setState({
      dropdownOpenpriority: !this.state.dropdownOpenpriority
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
                  <b><Label htmlFor="category" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >CATEGORY</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledrop} id="droptype">
	                  <DropdownToggle color="danger" toggle={this.toggledrop} caret style={{fontSize: '18px'}} >Type</DropdownToggle>
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
                      <DropdownItem className="typelist">Misc</DropdownItem>
	                  </DropdownMenu>
	              </ButtonDropdown>
                </FormGroup>

                <FormGroup>
                  <b><Label htmlFor="todo" className="newlabel">TODO</Label></b>
                  <Input type="text" id="todo" name="todo"
                    innerRef={(input) => this.todo = input} />
                </FormGroup>
                <FormGroup>
                  <b><Label htmlFor="status" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >STATUS</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpenstatus} toggle={this.toggledropstatus} id="dropstatus">
                    <DropdownToggle color="danger" toggle={this.toggledropstatus} caret style={{fontSize: '18px'}} >Status</DropdownToggle>
                    <DropdownMenu className="drop">
                      <DropdownItem className="typelist">New</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist">In Progress</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                </FormGroup>

                <FormGroup>
                  <b><Label htmlFor="due" className="newlabel">DUE DATE</Label></b>
                  <Input type="date" id="due" name="due" max="2030-01-01" innerRef={(input) => this.due = input}/>
                </FormGroup>
                <FormGroup>
                  <b><Label htmlFor="priority" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >PRIORITY</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpenpriority} toggle={this.toggledroppriority} id="droppriority">
                    <DropdownToggle color="danger" toggle={this.toggledroppriority} caret style={{fontSize: '18px'}} >Priority</DropdownToggle>
                    <DropdownMenu className="drop">
                      <DropdownItem className="typelist">High</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist">Medium</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist">Low</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
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