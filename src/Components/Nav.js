import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navs extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false
    };
    // console.log(localStorage.getItem("userName"));
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }


	render(){
    const myEx = "/" + localStorage.getItem("userId")+ "/exercises";
		return( 
			<div>
		      <Navbar id="navbar" expand="sm">
                <div className="container">
                    <NavbarToggler id="tog" className="navbar-light" onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link disabled"  to={myEx}><i class="fa fa-user-circle" aria-hidden="true" style={{fontSize:'23px', color:'primary', marginRight: '7px', marginTop: '3px'}} ></i>{" Welcome " + localStorage.getItem("userName")}</NavLink></b>
                        </NavItem>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link"  to={myEx}><i class="fa fa-home" aria-hidden="true" style={{fontSize:'20px', color:'primary', marginRight: '7px'}} ></i>My Tasks</NavLink></b>
                        </NavItem>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link"  to={"/" + localStorage.getItem("userId")+ "/exercises/done"}><i class="fa fa-check-circle" aria-hidden="true" style={{fontSize:'20px', color:'primary', marginRight: '7px'}} ></i>Done Tasks</NavLink></b>
                        </NavItem>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link" to={"/" + localStorage.getItem("userId")+ "/exercises/new"}><i class="fas fa-tasks" aria-hidden="true" style={{fontSize:'19px', color:'primary', marginRight: '7px'}}></i>New Task</NavLink></b>
                        </NavItem><NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px'}} className="nav-link" to={"/"}><i class="fa fa-sign-out" style={{fontSize: '20px', marginRight: '15px'}}></i>Log Out</NavLink></b>
                        </NavItem>
                        </Nav>                            
                    </Collapse>
                </div>
              </Navbar>			    
            </div>
		)
	}
}

export default Navs;