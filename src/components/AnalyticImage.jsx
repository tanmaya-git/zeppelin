import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import zep from '../zep.png';


export default class AnalyticImage  extends Component{
    render(){
        return(
          <div> 
         <Image src = {zep} style ={{width:"1200px" ,height:"298px", paddingLeft:"40px"}}/>
         </div> 
        )
    }
}