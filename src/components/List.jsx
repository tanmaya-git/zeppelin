import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import './List.css';

export default class List extends Component {
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
    <Table   responsive bordered striped style={{width:"100%",borderSpacing: "0px",marginTop: "50px",color: "black"}}>
    <thead >
      <tr>
        <th>Retail Store</th> 
        <th>Customer ID </th> 
        <th>Transaction ID </th> 
        <th>Transaction Time</th>
        <th>Product ID</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody> {this.state.persons.map( function (person, key) {
        return(
          <tr key={ person._id}>            
            <td>{ person._source.catalogItem.retailStore} </td> 
            <td>{ person._source.catalogItem.customerId} </td> 
            <td>{ person._source.catalogItem.transactions.transactionId} </td> 
            <td>{ person._source.catalogItem.transactions.transactionTime} </td> 
            <td>{ person._source.catalogItem.transactions.productId} </td> 
            <td>{ person._source.catalogItem.transactions.cost} </td> 
          </tr>
              )
      })}
    </tbody>
    </Table>
    </div>
    )
  }
}

