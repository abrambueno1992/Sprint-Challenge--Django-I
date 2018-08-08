import React, { Component } from 'react';
import axios from 'axios';
// import moduleName from 'module'
class MainDisplay extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount = () => {
    this.getAllNotes()
  }

  getAllNotes = () => {
    const token = "Token 9d7ed1c1b05ce411ba5dd1184e3cffe307d10937";
      // const data = {

      //   'Id': localStorage.getItem('ID')
      // }

      const optionTwo = {
        method: 'GET',
        headers: { 'content-type': 'application/json','Access-Control-Allow-Origin':'*', 'Authorization': token },
        // data: data,
        url: 'https://sprintdjango.herokuapp.com/api/notes/',
      }
      
      axios(optionTwo)
        .then((resp) => {
          // localStorage.setItem('notes', resp.data)
          // dispatch({
          //   type: GET_NOTES_ACTION,
          //   payload: resp.data
          // })
          console.log(resp)
          // console.log(resp.data)
        })
        .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Hey from Main</h1>
      </div>
    )
  }
}

export default MainDisplay;