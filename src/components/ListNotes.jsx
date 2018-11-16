import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table, Button, Modal, Form, FormControl, FormGroup, ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';


export default class ListNotes extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteNote = this.deleteNote.bind(this);
    this.cloneNote = this.cloneNote.bind(this);
    this.handleHide = this.handleHide.bind(this);
    // this.importNote = this.importNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  this.state = {
    show :false,
    persons: [],
    cloneId :'',

  };
 
}

// importNote(){

// }
handleHide() {
  this.setState({ show: false });
}

cloneNote(index){
  // this.setState({cloneId:index});
  this.setState({ show: true});
  console.log(index);
  // let cloneId = index;
 
  // console.log(this.state.cloneId);
}

handleChange(event){
  console.log(event.target.name, event.target.value);
  this.setState({note:event.target.value});
  

}

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

handleSave(index) {
 
console.log(index);
//   console.log(this.state.note);
  axios.post(`http://35.190.187.2:9090/api/notebook/import`,{"name": index})
.then(res => {
  console.log(res.data);
  this.setState({ show: false });
  
  
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
            <Button bsStyle="info" style={{marginLeft:"80%",marginRight :"20%"}} onClick ={()=>this.cloneNote(person.id)}>Clone</Button>
            <Button bsStyle="danger" style={{marginLeft:"90%",marginRight :"10%"}} onClick ={()=> this.deleteNote(person.id)}>X</Button>
            {/* <div className="modal-container" style={{ height: 200 }}> */}
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
          style={{ height: 400 }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
             Enter Name of Cloned Note**
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
          <Button bsStyle="primary" onClick={() => this.handleSave(person.id)}>Save</Button>
            <Button onClick={this.handleHide}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
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

