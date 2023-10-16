import React, {Component } from "react";
import { useState } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    };
    render() {
        return (
            <form>
                <div>
                    <h1>Login</h1>
                </div>

                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" id="username" placeholder="Username" onChange={e=>this.setState({username: e.target.value})}/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                </div>
            </form>
        );
    }
}