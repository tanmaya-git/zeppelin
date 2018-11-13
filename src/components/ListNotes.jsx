import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'react-bootstrap';
import axios from 'axios';


export default class ListNotes extends Component {
  state = {
    persons: []
  }
componentDidMount() {
    axios.get(`http://138.68.251.108:9200/retailpocdev/_search?pretty`)
      .then(res => {
        console.log(res.data.hits.hits);
        const persons = res.data.hits.hits;
        this.setState({ persons });
      })
  }

  
  render() {
    return (
    <div>
    <Table   responsive>
    <thead  style={{color:"Orange", fontWeight:"bold"}}>
      <tr>
        <th>Name</th> 
        <th>ID </th> 
        
      </tr>
    </thead>
    <tbody> {this.state.persons.map( function (person, key) {
        return(
          <tr key={ person._id}>            
            <td>{ person._source.catalogItem.retailStore} </td> 
            <td>{ person._source.catalogItem.customerId} </td> 
            
          </tr>
              )
      })}
    </tbody>
    </Table>
    </div>
    )
  }
}

