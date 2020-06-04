import React , { Component } from 'react';
import { Navbar, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Navs extends Component{

	constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        
        this.state = {
        	isNavOpen: false
        };
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
		      <Navbar id="navbar" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '30px'}} className="nav-link"  to={myEx}>My Tasks</NavLink></b>
                        </NavItem>
                        <NavItem>
                            <b><NavLink style={{color: '#ffffff', fontSize: '20px', marginRight: '40px'}} className="nav-link" to={"/" + localStorage.getItem("userId")+ "/exercises/new"}>New Task</NavLink></b>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: '#ffffff', fontSize: '20px',marginLeft: '599px',}} className="nav-link" to={"/"}><i class="fa fa-sign-out" style={{fontSize: '20px', marginRight: '15px'}}></i>Log Out</NavLink>
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