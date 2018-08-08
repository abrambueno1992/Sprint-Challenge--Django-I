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
        axios.post(`${ROOT_URL}admin/login/?next=/admin/`, obj)
            .then(res => {
                console.log("response success", res)
                
            })
            .catch(err => {
                console.log("response failed", err)
                
            });


        //     var reqData = {
        //         "username": "admin",
        //         "password": "Abpython",
        //         "grant_type": "password"
        //     };
        //     //var reqData = "username=ganesh&password=123456&grant_type=password";
        //     axios({
        //         method: 'post',
        //         url: `${ROOT_URL}admin/`,
        //         withCredentials: true,
        //         crossdomain: true,
        //         data: Object.keys(reqData).map(key => key + '=' + reqData[key]).join('&'),   
        //         headers: { 
        //       "Content-Type": "application/x-www-form-urlencoded"
        //     //   "Cache-Control": "no-cache"
        //     //   "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        //     }
        //   }).then(function (response) {
        //     console.log("Heade With Authentication :" + response);
        //   })
        //   .catch(function (error) {
        //     console.log("Post Error : " +error);
        //   }); 
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