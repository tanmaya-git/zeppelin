import React, {Component} from 'react';
import {Button, Form, FormGroup, FormControl, ControlLabel,Col, Row} from 'react-bootstrap';



export default class Forminput extends Component{
       
    constructor(props) {
        super(props);
        this.state = {
            retailStore: '',
            customerId: '',
            transactionId: '',
            transactionTime: '',
            productId: '',
            cost: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (

            <div className="container-fluid">

                <Form horizontal className="container-fluid" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="retailStore">
                        <Col sm={2}>
                            <ControlLabel>Retail Store :</ControlLabel>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="number"
                                value={this.state.retailStore}
                                placeholder="Retail Store"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="customerId">
                        <Col sm={2}>
                            <ControlLabel>Customer ID :</ControlLabel>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="text"
                                value={this.state.customerId}
                                placeholder="Customer ID"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="transactionId">
                        <Col sm={2}>
                            <ControlLabel>Transaction ID :</ControlLabel>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="text"
                                value={this.state.transactionId}
                                placeholder="Transaction ID"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="transactionTime">
                        <Col sm={2}>
                            <ControlLabel>Transaction Time :</ControlLabel>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="text"
                                value={this.state.transactionTime}
                                placeholder="Transaction Time"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="productId">
                        <Col sm={2}>
                            <ControlLabel>Product ID :</ControlLabel>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="text"
                                value={this.state.productId}
                                placeholder="Product ID"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <br />
                    <FormGroup controlId="cost">
                        <Col sm={2}>
                            <ControlLabel>Cost :</ControlLabel>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                type="number"
                                value={this.state.cost}
                                placeholder="Cost"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <Col sm={12} style={{textAlign:"center",paddingTop:"20px"}}>
                    <Button style={{padding:"10px", color:"green"}} type="submit">Submit</Button>
                    <Button style={{padding:"10px", color:"red", marginLeft:"50px"}} type="cancel">Cancel</Button>
                    </Col>
                </Form>
            </div>
        );
    }
}