import React,{Component} from 'react';
import {Button,Form, FormGroup, FormControl, ButtonToolbar, Modal} from 'react-bootstrap';

export default class Create extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: true
        };
      }
    
      handleHide() {
        this.setState({ show: false });
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
             Enter Name of Note **
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
        <FormGroup controlId="formBasicText">
          
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
           
          />
          
        </FormGroup>
      </Form>
          </Modal.Body>
          <Modal.Footer>
              <ButtonToolbar>
          <Button bsStyle="primary">Save</Button>
            <Button onClick={this.handleHide}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
           
            </div>
        )
    } 
}