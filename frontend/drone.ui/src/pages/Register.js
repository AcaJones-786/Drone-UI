//Check layout of section vs form and backgrounds
import React, { Component } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    console.log(name, email, password, confirmPassword);
    //fetch("http://localhost:4000/api/users/register", {
    fetch("http://localhost:4000/api/users/Register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "ngrok-skip-browser-warning": "69420",
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      return res.json();
    })
    .then((res) => {
      console.log(res, "Register");
    })
    .catch((error) => {
      console.error('Error:', error);
    });    
  }
  render() {
    return (
      <form style={{width: "70%", margin: "auto", marginTop: "10%"}} onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <div className="mb-3">
          <input
            style={{
              width: "15cm",
              textAlign: "center",
              backgroundColor: "white",
              color: "#5A5A5A",
              borderRadius: "25px",
              margin: "auto",
            }}
            className="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        <div>
          <input
            style={{
              width: "15cm",
              textAlign: "center",
              backgroundColor: "white",
              color: "#5A5A5A",
              borderRadius: "25px",
              margin: "auto",
            }}
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div>
          <input
            style={{
              width: "15cm",
              textAlign: "center",
              backgroundColor: "white",
              color: "#5A5A5A",
              borderRadius: "25px",
              margin: "auto",
            }}
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div>
          <input
            style={{
              width: "15cm",
              textAlign: "center",
              backgroundColor: "white",
              color: "#5A5A5A",
              borderRadius: "25px",
              margin: "auto",
            }}
            className="form-control"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
          />
        </div>
        <Link to="/">
          <button style={{color: 'white', backgroundColor:'#6B8656',margin:'15px', padding:'5px', borderRadius:'10px', borderColor:'#6B8656'}} type="submit" onClick={this.handleSubmit}>Register</button>
        </Link>
        <button style={{color: 'white', backgroundColor:'#6B8656',margin:'15px', padding:'5px', borderRadius:'10px', borderColor:'#6B8656'}}>
          <a href="/login">Login</a>
        </button>
      </form>
    );
  }
}
