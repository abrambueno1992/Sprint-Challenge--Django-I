import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
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
        const obj = {
            username: this.state.username,
            password: this.state.password
        }
        this.handleSubmit(obj)

    }

    handleSubmit = (obj) => {
        const ROOT_URL = "https://sprintdjango.herokuapp.com/"
        axios.post(`${ROOT_URL}admin/`, obj)
            .then(res => {
                console.log("response success", res)
                // localStorage.setItem('token', res.data.token);
                // localStorage.setItem('username', res.data.username);
                // localStorage.setItem('ID', res.data.Id);
                // localStorage.setItem('expiration', expire);
                // dispatch({
                //     type: LOGIN_ACTION,
                //     payload: res.data.token,
                //     username: res.data.username,
                //     Id: res.data.Id,
                //     expiration: expire// (Math.floor(Date.now() / 1000) + (60*60))
                // });
                // history.push('/notes')
            })
            .catch(err => {
                console.log("response failed", err)
                // localStorage.removeItem('token');
                // localStorage.removeItem('username');
                // dispatch({ type: ERRORS });
            });
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
                <button onClick={this.handleConfirm}>Print Username</button>
            </div>
        )
    }
}

export default Login