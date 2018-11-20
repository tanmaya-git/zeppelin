import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Button } from 'react-bootstrap'
class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="/">AIrawat</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/home">
              Dashboard
            </NavItem>
            <NavItem eventKey={2} href="/gallery">
              Gallery
            </NavItem>
            <NavDropdown eventKey={3} title="Create" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}href="/forminput">Data Request</MenuItem>
              <MenuItem eventKey={3.2}>Data Provision</MenuItem>
              <MenuItem eventKey={3.3} >Insights</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={4} href="/forminput">
              <Button bsStyle="default">
                ADD +
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;