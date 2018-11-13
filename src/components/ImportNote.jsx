import React, { Component } from 'react';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button,Col, ButtonToolbar, Modal } from 'react-bootstrap'

export default class ImportNote extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
        this.handleSave = this.handleSave.bind(this);
    
        this.state = {
          show: true
        };
      }
    
      handleHide() {
        this.setState({ show: false });
      }
      handleSave() {
       console.log('handle event and save files');
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
            placeholder="Enter name of file to upload"
           
          />
          <br/>
          <br/>
         <FormControl type="file" placeholder="Name" required /> 
        </FormGroup>
      </Form>
          </Modal.Body>
          <Modal.Footer>
              <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.handleSave}>Save Upload</Button>
            <Button onClick={this.handleHide}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
           
            </div>
        )
    }
}