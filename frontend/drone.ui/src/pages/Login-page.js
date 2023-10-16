import React, {Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(e){
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email, password);
        fetch("http://localhost:3030/login-user", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({email, password})
        }).then((res)=>res.json()).then((data)=>{
            console.log(data, "Login");
            if (data.status === "ok") {
                alert("Login Successful");
                window.localStorage.setItem("token", data.data);
                window.location.href="/Home";
            }
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Login</h1>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})}/>
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password"  onChange={(e)=>this.setState({password: e.target.value})}/>
                </div>
                <a href="/"><button type="submit" class="btn btn-primary">Login</button></a>
                <button><a href="/">Sign Up</a></button>
            </form>
        );
    }
}