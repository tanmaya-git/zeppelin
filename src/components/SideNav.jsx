import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,NavItem,MenuItem, Button,Form, FormGroup, FormControl, ButtonToolbar, Modal} from 'react-bootstrap'
import axios from 'axios';


class SideNav extends Component {


  constructor(props, context) {
    super(props, context);

    
    this.handleShow = this.handleShow.bind(this);
 
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      note :'',
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
 handleShow() {
   this.setState({ show: true });
  }
  handleSave() {
    console.log(this.state.note);
    axios.post(`http://35.190.187.2:9090/api/notebook`, {"name": this.state.note})
  .then(res => {
    console.log(res.data);
    this.setState({ show: false });
    
  })
 
  }

  handleChange(event){
      console.log(event.target.name, event.target.value);
      this.setState({note:event.target.value});
   
  }
  render() {
    return (
      <div>
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
            <NavItem eventKey={4} onClick ={this.handleShow}>
              Create New Note
            </NavItem>
            <NavItem eventKey={6} >
              Delete Note
            </NavItem>
            <NavItem eventKey={7} href="/import">
            Import Note
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
          <Modal className="modal-container" style={{ height: 400 }}
          show={this.state.show}
          onHide={this.handleHide}
          // container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
             Enter Name of Note **
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
        <FormGroup controlId="formBasicText">
          
          <FormControl
            type="text"
            value={this.state.value}
            name = "noteName"
            placeholder="Enter name of the NoteBook"
            onChange ={this.handleChange}
          />
          
        </FormGroup>
      </Form>
          </Modal.Body>
          <Modal.Footer>
              <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.handleSave}>Save</Button>
            <Button onClick={this.handleHide}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
        </div>  
    );
  }
}

export default SideNav;