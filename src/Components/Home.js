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
    this.toggleModalsignup();
    event.preventDefault();
    axios.post("http://localhost:3001/users/signup", { username: this.username.value, password: this.password.value, name: this.name.value })
      .then((res) => {
        if (res.data.success) {
          console.log(res);
          this.setState({
            authenticated: true,
            userId: res.data.userId,
            token: res.data.token

          });
          localStorage.setItem("token",res.data.token);
          localStorage.setItem("userId",res.data.userId);
        }
      });
  }


  handleLogin(event) {
    this.toggleModallogin();
    console.log(event);
    console.log(this.username.value);
    event.preventDefault();
    axios.post("http://localhost:3001/users/login", { username: this.username.value, password: this.password.value })
      .then((res) => {
        if (res.data.success) {
          var red = "/" + res.data.userId + "/exercises";
          console.log(res);
          localStorage.setItem("token",res.data.token);
          localStorage.setItem("userId",res.data.userId);
          this.setState({
            authenticated: true,
            userId: res.data.userId,
            token: res.data.token
          })
        }
      })
      .catch((err) => console.log(err));

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
              <div className="row">
                <p className="lead">Your Daily Planner to Schedule Work and Life..!!</p>
                <img src="https://pngimage.net/wp-content/uploads/2018/06/todo-png-6.png" width="170px" height="170px" id="to" alt="ToDo Icon" />
              </div>
              <p className="but">
                <Button id="login" color="primary" onClick={this.toggleModallogin}>Login</Button>
                <Button id="signup" color="primary" onClick={this.toggleModalsignup}>Sign Up</Button>
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
                <Button type="submit" color="primary" style={{marginTop: '5px'}} >Login</Button>
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
                <Button type="submit" color="primary" style={{marginTop: '5px'}} >Sign up</Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }
};

export default Home;