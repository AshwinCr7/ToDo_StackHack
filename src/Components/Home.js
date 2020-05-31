import React , {Component} from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label  } from 'reactstrap';
import axios from "axios";
class Home extends Component {

	constructor(props) {
        super(props);

        this.toggleModallogin = this.toggleModallogin.bind(this);
        this.toggleModalsignup = this.toggleModalsignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
          isModalOpenlogin: false,
          isModalOpensignup: false
        };
      }

      toggleModallogin() {
        this.setState({
          isModalOpenlogin: !this.state.isModalOpen
        });
      }

      toggleModalsignup() {
        this.setState({
          isModalOpensignup: !this.state.isModalOpen
        });
      }
      
      handleLogin(event) {
        this.toggleModallogin();
        // alert("Username: " + this.username.value + " Password: " + this.password.value
        //     + " Remember: " + this.remember.checked);
        console.log(event);
        console.log(this.username.value);
        event.preventDefault();
        axios.post("http://localhost:3001/users/login",{username : this.username.value,password: this.password.value})
          .then((res)=>{
            console.log(res);
          })
          .catch((err)=>console.log(err));

      }

	render(){
	  return (
	  	<div>
	  	<Jumbotron style={{ background: `#3cc1fa` , margin: `200px auto`, height: `310px` }}>
	  		<div class = "home">		  	
		        <h1 className="h1">To Do List...!!!</h1>
		        <div className="row">
		        <p className="lead">Your Daily Planner to Schedule Work and Life..!!</p>
		        <img src="https://pngimage.net/wp-content/uploads/2018/06/todo-png-6.png" width="170px" height="170px" id="to"/>
		        </div>
		        <p className="but">
		          <Button  id="login" color="primary" onClick={this.toggleModallogin}>Login</Button>
		          <Button id="signup" color="primary" onClick={this.toggleModalsignup}>Sign Up</Button>
		        </p>	 
		    </div>   
	    </Jumbotron>
	    <Modal isOpen={this.state.isModalOpenlogin} toggle={this.toggleModallogin}>
            <ModalHeader toggle={this.toggleModallogin}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}  />
                    </FormGroup>                    
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </Form>
            </ModalBody>
        </Modal>
        <Modal isOpen={this.state.isModalOpensignup} toggle={this.toggleModalsignup}>
            <ModalHeader toggle={this.toggleModalsignup}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name"
                            innerRef={(input) => this.name = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}  />
                    </FormGroup>                    
                    <Button type="submit" value="submit" color="primary">Sign up</Button>
                </Form>
            </ModalBody>
        </Modal>
        </div>
	  );
	}
};

export default Home;