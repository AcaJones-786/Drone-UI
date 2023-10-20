//Do we need this page?
import React, {Component } from "react";
import "../App.css";

export default class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      homeUser: "",
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    fetch("https://3ee9-165-255-27-41.ngrok-free.app/api/users/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({token:window.localStorage.getItem("token")}),
        }).then((res)=>res.json()).then((data)=>{
            console.log(data, "homeUser");
            this.setState({homeUser: data.data})
        })
  }
  render(){
    return (
      
        <section className="container">
        <header>
        <h1 className="mb-5" style={{textAlign: 'center', color: 'magenta'}}>Hi <i>{this.state.homeUser.username}</i>, Welcome to Drone Delivery</h1>
        </header>
          
          
          <figure>
            <blockquote class="blockquote">
              <h3>Welcome to our Drone Delivery with Optimization Final Year Project!</h3>
            </blockquote>
            <figcaption class="blockquote-footer">
              Planned, Developed and Executed by:  <cite title="Source Title">Albrecht Ohsiek, Alexis Elke Moolman, Ammaar Peerbhai, Andrew Botes, Anton De Vos, Acseivire Mboto</cite>
            </figcaption>
          </figure>
    
          <h3 style={{marginTop: '5em'}}>
            Project Overview
          </h3>
            <p>blah blah blah</p>
    
          <h3 style={{marginTop: '3em'}}>
            UI Delineation
          </h3>
            <p>blah blah blah</p>
    
          <h3 style={{marginTop: '3em'}}>
            Members
          </h3>
            <p>blah blah blah</p>
        </section>
      
    );
  }
};


