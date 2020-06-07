import React , {Component} from 'react';
import { Form, FormGroup, FormFeedback, Label, Input, Button, Jumbotron, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Navs from './Nav';
import axios from "axios";

class NewExercise extends Component{

	constructor(props) {
        super(props); 
            this.validate = this.validate.bind(this);
            this.toggledrop = this.toggledrop.bind(this);
            this.changeValuetype = this.changeValuetype.bind(this);
            this.changeValuepriority= this.changeValuepriority.bind(this);
            this.changeValuestatus = this.changeValuestatus.bind(this);
            this.toggledroppriority = this.toggledroppriority.bind(this);
            this.toggledropstatus = this.toggledropstatus.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChangename = this.handleInputChangename.bind(this);
            this.handleInputChangetodo = this.handleInputChangetodo.bind(this);
            this.handleInputChangedate = this.handleInputChangedate.bind(this);
            this.handleBlurname = this.handleBlurname.bind(this);
            this.handleBlurtodo = this.handleBlurtodo.bind(this);

            this.state = {
              valuename : '',
              valuetodo : '',
              valuedate : '',	
              dropdownOpen : false,
              dropdownOpenstatus : false,
              dropdownOpenpriority : false,
              dropDownValuetype : 'Type',
              dropDownValuestatus : 'Status',
              dropDownValuepriority : 'Priority',
              listname : false,
              todo : false
            }
    }

  handleBlurname(){
    this.setState({
      listname: true
    });
  }

  handleBlurtodo(){
    this.setState({
      todo: true
    });
  }

  handleSubmit(event){
    event.preventDefault();
    axios.defaults.withCredentials = true ;
    axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

      axios.post("https://todobackendsmith.herokuapp.com/tasks/newtask",{title : this.listname.value,label : this.state.dropDownValuetype,status : this.state.dropDownValuestatus,due:this.due.value,task : this.todo.value,priority : this.state.dropDownValuepriority})
          .then((res) => {
              if (res.status === 200) {
                  // console.log(res.data);
                
              }
          })

    this.setState({
    valuename : '',
    valuetodo : '',
    valuedate : '',
    dropDownValuetype : 'Type',
    dropDownValuestatus : 'Status',
    dropDownValuepriority : 'Priority',
    todo: false,
    listname: false
        });
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

  handleInputChangename(e){
  this.setState ({
    valuename : e.target.value    
  })
  }

  handleInputChangetodo(e){
  this.setState ({
    valuetodo : e.target.value 
  })
  }

  handleInputChangedate(e){
  this.setState ({
    valuedate : e.target.value 
  })
  }

  validate(valuename,valuetodo){
    const errors = {
          valuename : '',
          valuetodo : ''          
        };

        if(this.state.listname && valuename === '')
            errors.valuename = 'Enter Name ..!!';
        if(this.state.todo && valuetodo === '')
            errors.valuetodo = 'Enter Task ..!!'; 

        return errors;
  }
	
	render(){
    const errors = this.validate(this.state.valuename,this.state.valuetodo);
		return(
			<div style={{marginLeft : '9.5px'}} >
			<Navs userId={localStorage.getItem("userId")} />
			<div>
			<Jumbotron id = "jumbon">
			<Form id="new" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <b><Label htmlFor="listname" className="newlabel">NAME</Label></b>
                  <Input type="text" placeholder="Name" className="input" id="listname" name="listname" valid = {errors.valuename === ''} invalid = {errors.valuename!==''}
                    innerRef={(input) => this.listname = input} onChange={this.handleInputChangename} onClick={this.handleBlurname} value={this.state.valuename} />
                  <FormFeedback className="feed">{errors.valuename}</FormFeedback>                  
                </FormGroup>

                <FormGroup>
                  <b><Label htmlFor="category" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >CATEGORY</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledrop} id="droptype" name="droptype">
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
                  <Input type="text" placeholder="ToDo" className="input" id="todo" name="todo"
                    innerRef={(input) => this.todo = input} onClick={this.handleBlurtodo} onChange={this.handleInputChangetodo} value={this.state.valuetodo} valid = {errors.valuetodo === ''} invalid = {errors.valuetodo!==''} />
                  <FormFeedback className="feed">{errors.valuetodo}</FormFeedback> 
                </FormGroup>
                <FormGroup>
                  <b><Label htmlFor="status" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >STATUS</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpenstatus} toggle={this.toggledropstatus} id="dropstatus" name="dropstatus" >
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
                  <Input type="date" className="input" id="due" name="due" max="2030-01-01" 
                  innerRef={(input) => this.due = input} onChange={this.handleInputChangedate} value = {this.state.valuedate} />
                </FormGroup>
                <FormGroup>
                  <b><Label htmlFor="priority" className="newlabel" style={{ marginTop: '20px', marginBottom: '10px '}} >PRIORITY</Label></b>
                  
                  <ButtonDropdown isOpen={this.state.dropdownOpenpriority} toggle={this.toggledroppriority} id="droppriority" name="droppriority" >
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
                <Button type="submit" value="submit" onClick={this.handleSubmit} color="primary" id="sub"><i class="fa fa-send-o" style={{fontSize:'15px', color:'primary', marginRight: '7px'}}></i>Submit</Button>
      </Form>      
      </Jumbotron>
      </div>
	</div>			
		);
	}
}

export default NewExercise;