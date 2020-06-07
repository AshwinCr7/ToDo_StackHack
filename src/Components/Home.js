import React, { Component } from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from "axios";
import { Redirect } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);

    this.toggleModallogin = this.toggleModallogin.bind(this);
    this.toggleModalsignup = this.toggleModalsignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    axios.defaults.withCredentials = true;

    this.state = {
      isModalOpenlogin: false,
      isModalOpensignup: false,
      authenticated: false,
      userId: null,
      token: null
    };
  }

  toggleModallogin() {
    this.setState({
      isModalOpenlogin: !this.state.isModalOpenlogin
    });
  }

  toggleModalsignup() {
    this.setState({
      isModalOpensignup: !this.state.isModalOpensignup
    });
  }

  handleSignup(event) {    
    event.preventDefault();
    axios.post("https://todobackendsmith.herokuapp.com/users/signup", { username: this.username.value, password: this.password.value, name: this.name.value })
      .then((res) => {
        if (res.data.success) {
          this.toggleModalsignup();	
          // console.log(res);
          localStorage.setItem("token",res.data.token);
          localStorage.setItem("userId",res.data.userId);
          localStorage.setItem("userName",res.data.name);
          // console.log(res.data.name);
          this.setState({
            authenticated: true,
            userId: res.data.userId,
            token: res.data.token
          });
          
        }
      })
      
  }


  handleLogin(event) {
    // console.log(event);
    // console.log(this.username.value);
    event.preventDefault();
    axios.post("https://todobackendsmith.herokuapp.com/users/login", { username: this.username.value, password: this.password.value })
      .then((res) => {
        // console.log(res.data);
        if (res.status == 200) {
    	  this.toggleModallogin();
          var red = "/" + res.data.userId + "/exercises";
          // console.log(res);
          localStorage.setItem("token",res.data.token);
          localStorage.setItem("userId",res.data.userId);
          localStorage.setItem("userName",res.data.name);
          this.setState({
            authenticated: true,
            userId: res.data.userId,
            token: res.data.token
          })
        }

      })
      .catch((err)=>alert("Invalid Credentials"))

  }

  render() {
    if (this.state.authenticated) {
      console.log(this.state.userId);
      return <Redirect to={
        {
          pathname: "/" + localStorage.getItem("userId") + "/exercises",
        }
      } />
    }

    else {
      return (
        <div>
          <Jumbotron id="jumboh">
            <div className="home">
              <h1 className="h1">To Do List...!!!</h1>
              <div className="row col-12 m-1">
                <p className="lead">Your Daily Planner to Schedule Work and Life..!!</p>
                <img src="todo.png" width="200px" height="200px" id="to" alt="ToDo Icon" />
              </div>
              <p className="but">
                <Button id="login" color="primary" onClick={this.toggleModallogin}><i class="fa fa-sign-in" aria-hidden="true" style={{marginRight: '7px'}} ></i>
                Login</Button>
                <Button id="signup" color="primary" onClick={this.toggleModalsignup}><i class="fa fa-user" style={{fontSize: '15px' , marginRight: '7px'}} ></i>Sign Up</Button>
              </p>
            </div>
          </Jumbotron>
          <Modal id="modlog" isOpen={this.state.isModalOpenlogin} toggle={this.toggleModallogin}>
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
                    innerRef={(input) => this.password = input} />
                </FormGroup>
                <Button type="submit" color="primary" style={{marginTop: '5px', height: '42px', width: '89px'}} ><i class="fa fa-sign-in" aria-hidden="true" style={{marginRight: '7px'}} ></i>Login</Button>
              </Form>
            </ModalBody>
          </Modal>
          <Modal id="modsign" isOpen={this.state.isModalOpensignup} toggle={this.toggleModalsignup}>
            <ModalHeader toggle={this.toggleModalsignup}>SignUp</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSignup}>
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
                    innerRef={(input) => this.password = input} />
                </FormGroup>
                <Button type="submit" color="primary" style={{marginTop: '5px', height: '42px', width: '105px'}} ><i class="fa fa-user" style={{fontSize: '15px' , marginRight: '7px'}} ></i>Sign Up</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
};

export default Home;