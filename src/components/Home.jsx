import React, { Component } from 'react';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button,Col, ButtonToolbar } from 'react-bootstrap'
import SideNav from'./SideNav'
class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div >
                    <Col md = {2}>
                    <SideNav />
                    </Col>
                <Col md={10}>
                <Panel>
                    <Panel.Title>
                        <div className="pull-right" style={{padding:"5px"}}>
                           <ButtonToolbar>
                              <Button  bsStyle="info" style={{paddingRight:"10px"}}>Run</Button>
                    
                            <Button  bsStyle="info">Clear</Button>
                            </ButtonToolbar> 
                        </div>
                    </Panel.Title>
                    <Panel.Body>
                        <Form>
                            <FormGroup controlId="formControlsTextarea">
                                <FormControl componentClass="textarea" placeholder="textarea" />
                            </FormGroup>
                        </Form>
                    </Panel.Body>
                </Panel>
           
           <Button className="btn btn-primary" pullRight>Add Paragraph</Button>
           </Col>
           </div>
          </div>
    );
    }
}

export default Home;