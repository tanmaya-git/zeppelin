import React,{Component} from 'react';
import {Button,Form, FormGroup, FormControl, ButtonToolbar} from 'react-bootstrap';

export default class Create extends Component{
    render()
    {
        return(
            <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <Form>
                            <FormGroup controlId="formControlsTextarea">
                            <p style={{fontStyle:"Italic", fontSize:"15px", color:"green"}}>Name: </p> 
                                <FormControl componentClass="textarea" placeholder="Enter Name of Note" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                            <p style={{fontStyle:"Italic", fontSize:"15px", color:"green"}}>Paragraph: </p> <FormControl componentClass="textarea" placeholder="Paragraph"/>
                            
                               
                            </FormGroup>
                        </Form>
                        <ButtonToolbar pullRight>
            < Button bsStyle="primary"  style={{padding:"10px", paddingRight:"10px"}}> Create+ </Button>
           
          
            < Button bsStyle="danger"  style={{padding:"10px"}}> Cancel </Button>
            </ButtonToolbar>
            </div>
        )
    } 
}