import "../App.css";
import axios from 'axios';

import React, { Component } from "react";

const Dash = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "3em",
};

export default class DeliveryDashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          userID: "",
          startX: 0,
          startY: 0,
          orderCreated: false,
        };
    }

    componentDidMount() {
        const accessToken = window.localStorage.getItem("token");
        const tokenParts = accessToken.split(".");
        const payload = JSON.parse(atob(tokenParts[1]));
        const userId = payload._id;
        console.log(userId);

        console.log(accessToken);
        
        this.setState({ userID: userId });
        console.log(payload);        
      }    



    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    createOrder = () => {
    const orderData = {
        userId: this.state.userID,
        start: {
        x: parseInt(this.state.startX, 10),
        y: parseInt(this.state.startY, 10),
        },
    };
    const accessTk = window.localStorage.getItem("token");
    console.log(orderData);

    fetch("https://71d9-165-255-100-136.ngrok-free.app/api/orders/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           'Authorization': `Bearer ${accessTk}`,
        },
        body: JSON.stringify(orderData),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order created:", data);
        this.setState({ orderCreated: true });
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };
  



  render() {
    return (
      <form>
        <h1>Delivery</h1>
        <p> Here you will find information about your delivery</p>

        <div style={Dash}>
          <div>
          <h2>Order Details</h2>
            <div>
              <label>User Id: {this.state.userID}</label>
            </div>
            <div>
              <label>Start Point X:</label>
              <input
                type="number"
                name="startX"
                value={this.state.startX}
                onChange={this.handleInputChange}
              />
              <label>Start Point Y:</label>
              <input
                type="number"
                name="startY"
                value={this.state.startY}
                onChange={this.handleInputChange}
              />
            </div>
          <button type="button" style={{color: 'white', backgroundColor:'#6B8656',margin:'15px', padding:'5px', borderRadius:'10px', borderColor:'#6B8656'}} onClick={this.createOrder}>Create Order</button>
          </div>

          <div>
            <h2>Route Details</h2>
            <div>
                <label>ID: </label>
                <input style={{ display: "block", width: "100%"}} type="text" ></input>
            </div>
            <div>
                <label>Status: </label>
                <input style={{ display: "block", width: "100%"}} type="text" ></input>
            </div>
            <div>
                <label>Path: </label>
                <input style={{ display: "block", width: "100%"}} type="text" ></input>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
