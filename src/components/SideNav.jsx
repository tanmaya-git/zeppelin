import React, { Component } from 'react';
import {  Nav,  NavItem} from 'react-bootstrap';
import axios from 'axios';

class SideNav extends Component {

  state = {
    folder: [],
    files: []
  }
  openNote(data,e) {
    axios.get(`http://35.190.187.2:9090/api/notebook/`+data).then(res =>{
      if(res.status ===200){
        console.log(res);
      }
    })
  }

  componentWillMount() {
    axios.get(`http://35.190.187.2:9090/api/notebook`)
      .then(res => {
        if (res.status === 200) {
          var response = res.data.body;
          var i;
          for (i = 0; i <= response.length - 1; i++) {
            if (response[i].name.includes("/")) {
              let path = response[i].name;
              if (path.startsWith("/")) {
                const pathnames = path.split("/");
                if (pathnames[2] !== "" && pathnames[2] !== undefined) {
                  //   if (pathnames.length > 3) {
                  //     if (this.state.folder.length > 0) {
                  //       var j;
                  //       let match;
                  //       let index;
                  //       for (j = 0; j <= this.state.folder.length - 1; j++) {
                  //         if (pathnames[1] === this.state.folder[j].folderName){
                  //             match = true;
                  //             index = j;
                  //             break;
                  //         }
                  //         else{
                  //           match = false;
                  //         }

                  //       }
                  //       if (match === true) {
                  //         const file = {
                  //           fileName: pathnames[2],
                  //           id: response[i].id
                  //         }
                  //         this.state.folder[index].files.push(file);
                  //       }
                  //       else {
                  //         const folder = {
                  //           folderName: pathnames[1],
                  //           files: [{
                  //             fileName: pathnames[2],
                  //             id: response[i].id
                  //           }]
                  //         }
                  //         this.state.folder.push(folder);
                  //       }
                  //     }
                  //   else {
                  //     const folder = {
                  //       folderName: pathnames[1],
                  //       files: [{
                  //         fileName: pathnames[2],
                  //         id: response[i].id
                  //       }]
                  //     }
                  //     this.state.folder.push(folder);
                  //   }

                  // }else{}
                } else {
                  const file = {
                    name: pathnames[1],
                    id: response[i].id
                  };
                  const value = this.state.files.concat(file);
                  this.setState({ files: value });
                }
              }
              else {
                const pathnames = path.split("/");
                if (pathnames[1] !== "" && pathnames[1] !== undefined) {

                } else {
                  const file = {
                    name: pathnames[0],
                    id: response[i].id
                  };
                  const value = this.state.files.concat(file);
                  this.setState({ files: value });
                }

              }
            }
            else {
              const value = this.state.files.concat(response[i]);
              this.setState({ files: value });
            }

          }
          console.log(this.state.folder);
          console.log(this.state.files);
        }
        else {

        }
      })
  }
  render() {
    var folders = this.state.files.map( (files) => {
      let  onItemClick = this.openNote.bind(this,files.id);
      return (
        <NavItem key="{files.id}" href={"/notebook/"+files.id} onClick={onItemClick}>
          {files.name}
        </NavItem>
      );
    });
    return (

      <Nav>
        {folders}
      </Nav>
    );
  }
}

export default SideNav;