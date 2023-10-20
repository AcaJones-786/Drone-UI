//Check layout of section vs form and backgrounds
import React, {Component } from "react";
import "../App.css";

export default class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: "",
    //         password: ""
    //     }
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // };
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    // handleSubmit(e){
    //     e.preventDefault();
    //     const {email, password} = this.state;
    //     console.log(email, password);
    //     fetch("http://localhost:3030/login-user", {
    //         method: "POST",
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body:JSON.stringify({email, password})
    //     }).then((res)=>res.json()).then((data)=>{
    //         console.log(data, "Login");
    //         if (data.status === "ok") {
    //             alert("Login Successful");
    //             window.localStorage.setItem("token", data.data);
    //             window.location.href="/Home";
    //         }
    //     })
    // }




    handleSubmit(e){
    e.preventDefault();
const { name, password } = this.state;
console.log(name, password);


fetch("https://3ee9-165-255-27-41.ngrok-free.app/api/users/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, password }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data, "Login");
    if (data.status === "ok") {
      alert("Login Successful");
      window.localStorage.setItem("token", data.token);
      window.location.href = "/Home";
    }
  })
  .catch((error) => {
    console.error("Login failed:", error);
  });
}

// async handleSubmit(e) {
//     e.preventDefault();
//     const { name, password } = this.state;
//     console.log(name, password);
  
//     try {
//       const response = await fetch("https://3ee9-165-255-27-41.ngrok-free.app/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, password }),
//       });
  
//       if (!response.ok) {
//         console.error("Login failed:", response.statusText);
//         return;
//       }
//       else{
//         alert("successful login!!")
//       }  
//       const data = await response.json();
//       console.log(data, "Login");
//       if (data.status === "ok") {
//         alert("Login Successful");
//         window.localStorage.setItem("token", data.token);
//         window.location.href = "/Home";
//       }
//     } catch (error) {
//       console.error("An error occurred during login:", error);
//     }
//   }
  









// componentDidMount(){
//     fetch("https://3ee9-165-255-27-41.ngrok-free.app/api/users/login", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//             },
//             body:JSON.stringify({token:window.localStorage.getItem("token")}),
//         }).then((res)=>res.json()).then((data)=>{
//             console.log(data, "homeUser");
//             this.setState({homeUser: data.data})
//         })
//   }








    render() {
        return (
          
            <form onSubmit={this.handleSubmit}>
                <header>
                    <h1>Login</h1>
                </header>

                {/* <div>
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})}/>
                </div> */}
                <div>
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" onChange={(e)=>this.setState({name: e.target.value})}/>
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