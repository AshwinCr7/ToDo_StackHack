import React , {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Navs from './Nav';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import Exercise from './Exercise';

class NewExercise extends Component{

	constructor(props) {
        super(props); 
            this.toggledrop = this.toggledrop.bind(this);
            this.changeValuetype = this.changeValuetype.bind(this);
            this.changeValuepriority= this.changeValuepriority.bind(this);
            this.changeValuestatus = this.changeValuestatus.bind(this);
            this.toggledroppriority = this.toggledroppriority.bind(this);
            this.toggledropstatus = this.toggledropstatus.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
              dropdownOpen : false,
              dropdownOpenstatus : false,
              dropdownOpenpriority : false,
              dropDownValuetype : 'Type',
              dropDownValuestatus : 'Status',
              dropDownValuepriority : 'Priority'
            }
    }

  handleSubmit(event){
    event.preventDefault();
    axios.defaults.withCredentials = true ;
    axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

      axios.post("http://localhost:3001/tasks/newtask",{title : this.listname.value,label : this.state.dropDownValuetype,status : this.state.dropDownValuestatus,due:this.due.value,task : this.todo.value,priority : this.state.dropDownValuepriority})
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

  changeValuetype(e) {
  		this.setState({dropDownValuetype: e.currentTarget.textContent})
	}

  changeValuestatus(e) {
		this.setState({dropDownValuestatus: e.currentTarget.textContent})
  }

  changeValuepriority(e) {
		this.setState({dropDownValuepriority: e.currentTarget.textContent})
  }
	
	render(){
		return(
			<div>
			<Navs />
			<Jumbotron id = "jumbon">
			<Form id="new" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <b><Label htmlFor="listname" className="newlabel">NAME</Label></b>
                  <Input type="text" className="input" id="listname" name="listname"
                    innerRef={(input) => this.listname = input} />
                </FormGroup>

                <FormGroup>
                  <b><Label htmlFor="category" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >CATEGORY</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledrop} id="droptype">
	                  <DropdownToggle color="danger" toggle={this.toggledrop} caret style={{fontSize: '18px'}} >{this.state.dropDownValuetype}</DropdownToggle>
	                  <DropdownMenu className="drop">
	                    <DropdownItem className="typelist" onClick={this.changeValuetype} >Home</DropdownItem>
                      <hr/>
	                    <DropdownItem className="typelist" onClick={this.changeValuetype} >Work</DropdownItem>
                      <hr/>
	                    <DropdownItem className="typelist" onClick={this.changeValuetype} >Shopping</DropdownItem>
                      <hr/>
	                    <DropdownItem className="typelist" onClick={this.changeValuetype} >Edu</DropdownItem>
                      <hr/>
	                    <DropdownItem className="typelist" onClick={this.changeValuetype} >Payments</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist" onClick={this.changeValuetype} >Misc</DropdownItem>
	                  </DropdownMenu>
	              </ButtonDropdown>
                </FormGroup>

                <FormGroup>
                  <b><Label htmlFor="todo" className="newlabel">TODO</Label></b>
                  <Input type="text" className="input" id="todo" name="todo"
                    innerRef={(input) => this.todo = input} />
                </FormGroup>
                <FormGroup>
                  <b><Label htmlFor="status" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >STATUS</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpenstatus} toggle={this.toggledropstatus} id="dropstatus">
                    <DropdownToggle color="danger" toggle={this.toggledropstatus} caret style={{fontSize: '18px'}} >{this.state.dropDownValuestatus}</DropdownToggle>
                    <DropdownMenu className="drop">
                      <DropdownItem className="typelist" onClick={this.changeValuestatus} >New</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist" onClick={this.changeValuestatus} >In Progress</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                </FormGroup>

                <FormGroup>
                  <b><Label htmlFor="due" className="newlabel">DUE DATE</Label></b>
                  <Input type="date" className="input" id="due" name="due" max="2030-01-01" innerRef={(input) => this.due = input}/>
                </FormGroup>
                <FormGroup>
                  <b><Label htmlFor="priority" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >PRIORITY</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpenpriority} toggle={this.toggledroppriority} id="droppriority">
                    <DropdownToggle color="danger" toggle={this.toggledroppriority} caret style={{fontSize: '18px'}} >{this.state.dropDownValuepriority}</DropdownToggle>
                    <DropdownMenu className="drop">
                      <DropdownItem className="typelist" onClick={this.changeValuepriority}>High</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist" onClick={this.changeValuepriority}>Medium</DropdownItem>
                      <hr/>
                      <DropdownItem className="typelist" onClick={this.changeValuepriority}>Low</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                </FormGroup>
                <Button type="submit" value="submit" color="primary" id="sub"><i class="fa fa-send-o" style={{fontSize:'15px', color:'primary', marginRight: '7px'}}></i>Submit</Button>
      </Form>      
      </Jumbotron>
	</div>			
		);
	}
}

export default NewExercise;