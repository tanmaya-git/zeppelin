import React, {Component} from 'react';
import {Image,Grid,Row,Col} from 'react-bootstrap';
import data from '../data.jpg'


export default class Gallery  extends Component{
    render(){
        return(
            <Grid>
            <Row className="show-grid">
              <Col xs={6} md={6} lg={6}>
              <div className="container" >
              <div style={{textAlign:"center"}}>
              <Image src = {data} style ={{width:"100%" ,height:"100%"}}/>
              </div>
              <a href="/note"> <div style={{textAlign:"center"}}>
                  <h3>Notebooks</h3>
              </div></a>
              </div>
              </Col>
              <Col xs={6} md={6}>
              <div className="container" >
              <div style={{textAlign:"center"}}>
              <Image src = {data} style ={{width:"100%" ,height:"100%"}}/>
              </div>
              <div style={{textAlign:"center"}}>
                  <a href="/note"><h3>Notebooks</h3></a>
              </div>
              </div>
              </Col>
            </Row>
          
            <Row className="show-grid">
              <Col xs={6} md={6}>
              <div className="container" >
              <div style={{textAlign:"center"}}>
              <Image src = {data} style ={{width:"100%" ,height:"100%"}}/>
              </div>
              <div style={{textAlign:"center"}}>
                  <a href="/note"><h3>Notebooks</h3></a>
              </div>
              </div>
              </Col>
              <Col xs={6} md={6}>
              <div className="container" >
              <div style={{textAlign:"center"}}>
              <Image src = {data} style ={{width:"100%" ,height:"100%"}}/>
              </div>
              <div style={{textAlign:"center"}}>
                  <a href="/note"><h3>Notebooks</h3></a>
              </div>
              </div>
              </Col>
            </Row>
          </Grid>
        )
    }
}