import React, {Component } from "react";
import { useState } from "react";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(e){
        e.preventDefault();
        const {username, email, password} = this.state;
        console.log(username, email, password);
        //fetch("http://localhost:3030/register", {
            fetch("https://3ee9-165-255-27-41.ngrok-free.app/api/users/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({username, email, password})
        }).then((res)=>res.json()).then((data)=>{
            console.log(data, "Register");
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <h1>Register</h1>
                </div>

                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" id="username" placeholder="Username" onChange={e=>this.setState({username: e.target.value})}/>
                </div>

                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email"  onChange={e=>this.setState({email: e.target.value})}/>
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password"  onChange={e=>this.setState({password: e.target.value})}/>
                </div>
                <a href="/"><button type="submit" class="btn btn-primary">Register</button></a>
                <button><a href="/login">Login</a></button>
            </form>
        );
    }
}