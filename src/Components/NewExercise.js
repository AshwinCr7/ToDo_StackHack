import React , {Component} from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron } from 'reactstrap';

class NewExercise extends Component{

	constructor(props) {
        super(props); 
            
    }
	
	render(){
		return(
			<div>
			<Jumbotron style={{ background: `#3cc1fa`, margin: `100px 0px 100px 0px`, height: `600px`, width: `620px` }}>
			<Form id="new">
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
                  <Input type="date" id="due" name="due" value="2020-06-01" max="2030-01-01" innerRef={(input) => this.due = input}/>
                </FormGroup>
                <Button type="submit" value="submit" color="primary" id="add">Add</Button>
                <Button type="submit" value="submit" color="primary" id="sub">Submit</Button>
            </Form>
            <p id="plan">Plan Your Work & Work Your Plan...!!!</p>
            </Jumbotron>
			</div>
			
		);
	}
}

export default NewExercise;