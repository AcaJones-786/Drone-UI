//Do we need this page?
import React, { Component } from "react";
import "../App.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeUser: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // fetch("https://dafe-165-255-100-148.ngrok-free.app/api/users/login", {
    //         method: "POST",
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body:JSON.stringify({token:window.localStorage.getItem("token")}),
    //     }).then((res)=>res.json()).then((data)=>{
    //         console.log(data, "homeUser");
    //         this.setState({homeUser: data.data})
    //     })
    const accessToken = window.localStorage.getItem("token");
    const tokenParts = accessToken.split(".");
    const payload = JSON.parse(atob(tokenParts[1]));

    const userName =
      payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const userEmail =
      payload[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
      ];

    console.log("Name:", userName);
    console.log("Email:", userEmail);

    this.setState({ homeUser: userName });
  }
  render() {
    return (
      <section className="container">
        <header style={{borderRadius: '25px', border: "solid 2px white"}}>
          <h2
            className="mb-5"
            style={{ textAlign: "center", color: "white" }}
          >
            Hello <i>{this.state.homeUser}</i>, Welcome to Drone Delivery. 
          </h2>
        </header>

        <figure>
          <blockquote className="blockquote">
            <h3>
              This is our Drone Delivery with Optimization Final Year
              Project!
            </h3>
          </blockquote>
          <figcaption className="blockquote-footer">
            Planned, Developed and Executed by:{" "}
            <cite title="Source Title">
              Albrecht Ohsiek, Alexis Elke Moolman, Ammaar Peerbhai, Andrew
              Botes, Anton De Vos, Acseivire Mboto
            </cite>
          </figcaption>
        </figure>

        <figure>
        <h3 style={{ marginTop: "5em" }}>Project Overview</h3>
        <p>Starting out we had a very wide project scope, but ended up narrowing down our third year project to an optimizing drone delivery system. Inspired by Checkers 60 and the drone delivery systems seen used in the USA
        <br></br>
        We have created a web-based application on which an order can be made, that will be delivered using our optimally calculated drone delivery routes, as well as a simulatoion demonstrating the delivery.
        </p> 
        </figure>
        
<figure>
<h3 style={{ marginTop: "3em" }}>Members</h3>
        <p>As our project manager, we proudly introduce Alebrecht Oshiek.
        <br></br>
        Andrew Botes, and Anton De Vos are our wonderful members who worked on the simulation of the drones. 
        <br></br>
        Our frontend creators are Ammaar Peerbhai, Alexis Moolman, and Acseivire Mboto.
        <br></br>
        Each group member had their own hand in the contributions made to this project are proud to have it functioning and looking good.
        Feel free to have a look around!
        </p>
        
        <p></p>
</figure>
        
      </section>
    );
  }
}
