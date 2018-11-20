import React,{Component} from 'react';
import {Button,Form, FormGroup, FormControl, ButtonToolbar, Modal} from 'react-bootstrap';
import axios from 'axios';

export default class CreateNote extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleSave = this.handleSave.bind(this);
    
        this.state = {
          show: true,
          note :'',
        };
      }
    
      handleHide() {
        this.setState({ show: false });
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
    render()
    {
        return(
          
                <div className="modal-container" style={{ height: 200 }}>
      

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
        )
    } 
}