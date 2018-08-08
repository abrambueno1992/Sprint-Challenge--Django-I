import React, { Component } from 'react';

const card = {
    color: 'blue',
    background: 'yellow',
    width: '50%'
  
}
const main = {
    textAlign: 'center',
    style: 'flex-box',
    marginLeft: '25%'
}

class Display extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={main}>
                {/* <h1>Hello from Display</h1> */}
                <div style={card}>
                    <h1>{this.props.note.title}</h1>
                    <h1>{this.props.note.content}</h1>
                </div>
            </div>
        )
    }
}


export default Display
// const Display = props => {

// }