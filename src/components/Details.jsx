import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import data from '../data.jpg';

export default class Details extends Component{
    render(){
        return(
<Grid>
        <Row>
            <Col md={6} mdPush={6} style = {{color: "dark grey", alignContent: "center", paddingTop: "15px"}}>
                    Data analytics is the science of drawing insights from raw information sources. 
                    Many of the techniques and processes of data analytics have been automated 
                    into mechanical processes and algorithms that work over raw data for human consumption. 
                    Data analytics techniques can reveal trends and metrics that would otherwise be lost in
                    the mass of information. This information can then be used to optimize processes to 
                    increase the overall efficiency of a business or system.
                
            </Col>   
            <Col  md={6} mdPull={6} >
                <Image  src ={data} style ={{width:"100%" ,height:"298px", paddingLeft:"0px"}} float-right/>
            </Col>
        </Row>
</Grid>
            
        )
    }
}