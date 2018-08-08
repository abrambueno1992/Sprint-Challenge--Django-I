import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display';
import Login from './Login';
// import moduleName from 'module'
const main = {
  textAlign: 'center'
}
class MainDisplay extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }

  }
  componentDidMount = () => {
    this.getAllNotes()
  }
  handleRefresh = () => {
    console.log(this.state.notes)
  }

  getAllNotes = () => {
    const token = "Token 9d7ed1c1b05ce411ba5dd1184e3cffe307d10937";
    // const data = {

    //   'Id': localStorage.getItem('ID')
    // }

    const optionTwo = {
      method: 'GET',
      headers: { 'content-type': 'application/json', 'Authorization': token },
      // data: data,
      url: 'https://sprintdjango.herokuapp.com/api/notes/',
    }

    axios(optionTwo)
      .then((resp) => {
        this.setState({ notes: resp.data })

        console.log(resp.data)
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div style={main}>

        <button onClick={this.handleRefresh}>
          Check render</button>
        <Login />
        {this.state.notes.map((each,i) => <Display key={each + i} note={each} />)}
      </div>
    )
  }
}

export default MainDisplay;

