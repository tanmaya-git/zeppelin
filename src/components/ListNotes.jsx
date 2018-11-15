import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table, Button} from 'react-bootstrap';
import axios from 'axios';


export default class ListNotes extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteNote = this.deleteNote.bind(this);
    // this.importNote = this.importNote.bind(this);
  this.state = {
    persons: []
  };
 
}

// importNote(){

// }

deleteNote(index){
console.log(index);
// const persons =this.state.persons;
// delete persons[index];
// this.setState({persons});

axios.delete(`http://35.190.187.2:9090/api/notebook/`+index)
.then(res => {
  console.log(res);
  console.log(res.data);
})
}

componentDidMount() {
    axios.get(`http://35.190.187.2:9090/api/notebook`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.body;
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
        {/* <th>Name </th>  */}
        
      </tr>
    </thead>
    <tbody> {this.state.persons.map( (person, index) => {
        // let listClick = this.deleteNote.bind(this);
        return(
          <tr key={ person.id}>            
            <td>{ person.name} 
            <Button bsStyle="danger" style={{marginLeft:"90%",marginRight :"10%"}} onClick ={()=> this.deleteNote(person.id)}>X</Button>
            {/* <Button bsStyle="info" style={{marginLeft:"90%",marginRight :"10%"}} onClick ={()=> this.importNote(person.id)}>Edit</Button> */}
            </td>  
          </tr>
              )
      })}
    </tbody>
    </Table>
    </div>
    )
  }
}

