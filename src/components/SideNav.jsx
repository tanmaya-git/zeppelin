import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,NavItem,MenuItem} from 'react-bootstrap'
class SideNav extends Component {
  render() {
    return (
    
          <Nav>
            <NavItem eventKey={1} href="/home">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/about">
              About
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
    );
  }
}

export default SideNav;