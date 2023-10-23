//Check layout of section vs form and backgrounds
import React, {Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(e){
        e.preventDefault();
        const {name, email, password, confirmPassword} = this.state;
        console.log(name, email, password, confirmPassword);
        //fetch("http://localhost:4000/api/users/register", {
        fetch("https://3ee9-165-255-27-41.ngrok-free.app/api/users/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "ngrok-skip-browser-warning": "69420",
            },
            body:JSON.stringify({name, email, password, confirmPassword})
        }).then((res)=>res.json()).then((data)=>{
            console.log(data, "Register");
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                <div className="mb-3">
                    
                    <input type="text"  name="username" id="username" placeholder="Username" onChange={e=>this.setState({name: e.target.value})}/>
                </div>

                <div >
                    
                    <input type="email"  name="email" id="email" placeholder="Email"  onChange={e=>this.setState({email: e.target.value})}/>
                </div>

                <div >
                    
                    <input type="password"  name="password" id="password" placeholder="Password"  onChange={e=>this.setState({password: e.target.value})}/>
                </div>

                <div >
                    
                    <input type="password"  name="confirm-password" id="confirm-password" placeholder="Confirm Password"  onChange={e=>this.setState({confirmPassword: e.target.value})}/>
                </div>
                <Link to="/">
    <button type="submit">Register</button>
</Link>
                <button><a href="/login">Login</a></button>
                
            </form>
            
        );
    }
}