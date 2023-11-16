//Check layout of section vs form and backgrounds
import React, { Component } from "react";
import "../App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, password } = this.state;
    console.log(name, password);

    fetch("https://71d9-165-255-100-136.ngrok-free.app/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Login");
        if (data.token !== undefined) {
          alert("Login Successful");
          window.localStorage.setItem("token", data.token);
          window.location.href = "/Home";
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        {/* <div>
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})}/>
                </div> */}
        
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
            class="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
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
            class="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <button style={{color: 'white', backgroundColor:'#6B8656',margin:'15px', padding:'5px', borderRadius:'10px', borderColor:'#6B8656'}} type="submit" onClick={this.handleSubmit}>
          <a href="/">Login</a>
        </button>
        <button style={{color: 'white', backgroundColor:'#6B8656',margin:'15px', padding:'5px', borderRadius:'10px', borderColor:'#6B8656'}}>
          <a href="/">Sign Up</a>
        </button>
      </form>
    );
  }
}
