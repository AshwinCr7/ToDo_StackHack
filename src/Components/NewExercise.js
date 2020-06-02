import React , {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron } from 'reactstrap';
import Exercise from './Exercise';
import Navs from './Nav';
import axios from "axios";

class NewExercise extends Component{

	constructor(props) {
        super(props); 
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
      event.preventDefault();
      axios.defaults.withCredentials = true ;
      axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }

        axios.post("http://localhost:3001/tasks/newtask",{title : this.listname.value,label : this.category.value,status : "Pending",due:this.due.value,task : this.todo.value})
            .then((res) => {
                if (res.status == 200) {
                    console.log(res.data);
                }
            })
  }
	
	render(){
		return(
			<div>
			<Navs />
			<Jumbotron style={{ background: `#3cc1fa`, margin: `100px 0px 100px 0px`, height: `600px`, width: `620px` }}>
			<Form id="new" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <b><Label htmlFor="listname" className="newlabel">Name</Label></b>
                  <Input type="text" id="listname" name="listname"
                    innerRef={(input) => this.listname = input} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="category" className="newlabel">Category</Label>
                  <Input type="text" id="category" name="category"
                    innerRef={(input) => this.category = input} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="todo" className="newlabel">Todo</Label>
                  <Input type="text" id="todo" name="todo"
                    innerRef={(input) => this.todo = input} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="due" className="newlabel">Due Date</Label>
                  <Input type="date" id="due" name="due" max="2030-01-01" innerRef={(input) => this.due = input}/>
                </FormGroup>
                <Button type="submit" value="submit" color="primary" id="add">Add</Button>
                <Button type="submit" value="submit" color="primary" id="sub">Submit</Button>
      </Form>
      <p id="plan">Plan Your Work & Work Your Plan ...!!!</p>
      </Jumbotron>
			</div>
			
		);
	}
}

export default NewExercise;