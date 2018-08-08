import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            title: '',
            note: '',
            url:'',
            token: '',
            cookie: ''
        }
    }
    handleInput = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleConfirm = e => {
        e.preventDefault();
        console.log(this.state.username)
        console.log(this.state.password)
        // const obj = {
        //     username: this.state.username,
        //     password: this.state.password
        // }
        const obj = {
            'title' : this.state.title,
            'content' : this.state.content,
            'url' : this.state.url
        }
        this.handleSubmit(obj)

    }

    handleSubmit = (obj) => {
        const token = 'Token 9d7ed1c1b05ce411ba5dd1184e3cffe307d10937'
        const ROOT_URL = "https://sprintdjango.herokuapp.com/"
        const optionTwo = {
            method: 'POST',
            headers: { 'content-type': 'application/json', 'Authorization': token },
            data: obj,
            url: `${ROOT_URL}api/notes/`,
        }
        axios(optionTwo)
            .then((resp) => {
                console.log("success", resp)
                // dispatch({
                //     type: CREATE_NOTE,
                //     payload: resp.data
                // });
            })
            .catch((err) => console.log("error with axios", err));
    }
    render() {
        // console.log(this.state.username)
        return (
            <div>
                <input
                    type="text"
                    placeholder="Please enter a username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}
                />
                <input
                    type="password"
                    placeholder="Please enter a username"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                />
                <input
                    type="text"
                    placeholder="Please enter a title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInput}
                />
                <input
                    type="text"
                    placeholder="Please enter a content"
                    name="content"
                    value={this.state.content}
                    onChange={this.handleInput}
                />
                <input
                    type="text"
                    placeholder="Please enter a url"
                    name="url;"
                    value={this.state.url}
                    onChange={this.handleInput}
                />
                <button onClick={this.handleConfirm}>Print Username</button>
            </div>
        )
    }
}

export default Login