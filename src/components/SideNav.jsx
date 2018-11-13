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
            <NavItem eventKey={3} href="/list">
              List Of Notes
            </NavItem>
            <NavItem eventKey={4} href="/create">
              Create New Note
            </NavItem>
            <NavItem eventKey={6} >
              Delete Note
            </NavItem>
            <NavItem eventKey={7} >
           
            </NavItem>
            <NavItem eventKey={8} >

            </NavItem>
            <NavItem eventKey={9} >

            </NavItem>
            <NavItem eventKey={10} >
           
            </NavItem>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <NavItem eventKey={11} >
             External Link
            </NavItem>
          </Nav>
    );
  }
}

export default SideNav;