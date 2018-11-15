import React, { Component } from 'react';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button,Col, ButtonToolbar, Modal } from 'react-bootstrap'
import axios from 'axios';
import { Redirect, Router } from 'react-router-dom';
import ListNotes from './ListNotes';

export default class ImportNote extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleSave = this.handleSave.bind(this);
    
        this.state = {
          show: true,
          note : ''
        };
      }

    //   handleUpload(){
      
    
    // }
      handleHide() {
        this.setState({ show: false });
      }
      handleSave() {
        console.log(this.state.note);
        axios.post(`http://35.190.187.2:9090/api/notebook/import`, {"name": this.state.note})
      .then(res => {
        console.log(res.data);
        this.setState({ show: false });
        
        
      })
      }

      handleChange(event){
        console.log(event.target.name, event.target.value);
        this.setState({note:event.target.value});
        
     
    }
    render()
    {
        return(
          
                <div className="modal-container" style={{ height: 200 }}>
        {/* <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Launch contained modal
        </Button> */}
        <ListNotes/>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
             Import File JSON
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
        <FormGroup controlId="formBasicText">
          
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter name of the file to upload"
            onChange ={this.handleChange}
            required />
          <br/>
          <br/>
         <FormControl type="file" placeholder="Name" required /> 
        </FormGroup>
      </Form>
          </Modal.Body>
          <Modal.Footer>
              <ButtonToolbar>
          <Button bsStyle="primary" onClick ={this.handleSave}>Save Upload</Button>
            <Button onClick={this.handleHide}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
           
            </div>
        )
    }
}