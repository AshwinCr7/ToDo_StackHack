import React , {Component} from 'react';
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
    const myEx = "/" + this.props.userId+ "/exercises";
		return(
			<div>
		      <Navbar id="navbar" style={{ background: '#03a5fc'}} expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink style={{color: '#ffffff'}} activeStyle={{color: 'black'}} className="nav-link"  to={myEx}>My Tasks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'white'}} activeStyle={{color: 'black'}} className="nav-link" to={"/" + this.props.userId+ "/exercises/new"}>New Task</NavLink>
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