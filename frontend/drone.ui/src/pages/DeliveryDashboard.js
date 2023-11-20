import "../App.css";
import axios from "axios";
// import cors from "cors";

import React, { Component } from "react";

const Dash = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "3em",
};

const Grid = {
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridGap: "1em",
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
    
      createOrder = async () => {

        // console.log("userID", this.state.userID);
        // console.log("X", this.state.startX);
        // console.log("Y", this.state.startY);

        const orderData = {
          userId: this.state.userID,
          start: {
            x: parseInt(this.state.startX, 10),
            y: parseInt(this.state.startY, 10),
          },
        };
        const accessTk = window.localStorage.getItem("token");
      
        try {
          const response = await fetch("http://localhost:4000/api/orders/create", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessTk}`,
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(orderData),
          });
      
          if (!response.ok) {
            alert('problem creating order');
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          console.log("Order created:", data);
          this.setState({ orderCreated: true });
        } catch (error) {
          console.error("Error creating order:", error);
        }
      };
      
      fetchOrders = async () => {
        const accessTk = window.localStorage.getItem("token");
    
        try {
          const response = await axios.get(
            `http://localhost:4000/api/orders/get/user/${this.state.userID}`,
            {
              headers: {
                Authorization: `Bearer ${accessTk}`,
              },
            }
          );
    
          this.setState({ orders: response.data });
          console.log("Orders fetched:", response.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };

      handleSearchOption = async (e) => {
        const option = e.target.value;

        switch (option) {
          case "viewA":
            console.log("viewA");            
            break;
          case "viewS":
            console.log("viewS");
            this.fetchOrders();
            break;
          default:
            console.log("weird");
        }

        // console.log("userID", this.state.userID);
        // console.log("X", this.state.startX);
        // console.log("Y", this.state.startY);
      }

      getAllRoutes = async (e) => {
        e.preventDefault();

        const accessTk = window.localStorage.getItem("token");

        try {
          const response = await axios.get(`http://localhost:4000/api/routes/`,
            {
              headers: {
                Authorization: `Bearer ${accessTk}`,
              },
            }
          );
          if (response.ok) {
            console.log("good");
            console.log(response.data);
          }else{
            throw new Error('Network response was not ok');
          }
        } catch (error) {
          console.log("bad");
        }
      }
    

  render() {
    return (
      <form>
        <h1>Delivery</h1>
        <p> Here you will find information about your delivery</p>

        <div style={Dash}>
          <div>
          <h2>Order Menu</h2>
            <div>
              <label>User Id: {this.state.userID}</label>
            </div>

            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "1em"}}>
              <button className="btn btn-info">Create Order</button>
              <select className="form-select" aria-label="Default select example" onChange={this.handleSearchOption}>
                <option value="">View Orders and Sort</option>
                <option value="viewA">Search All</option>
                <option value="viewS">Search by Status </option>
              </select>
              <div></div>
              <div>
              <select style={{width: "100%", margin: "0"}} className="form-select" aria-label="Default select example">
                  <option value="">Select Status</option>
                  <option value="enroute">en Route</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
            
            

            <div style={Grid}>
              <label>Start Point X: {''}
                <input
                  type="number"
                  name="startX"
                  value={this.state.startX}
                  onChange={(e) => this.setState({ startX: e.target.value })}
                />
              </label>
              
              <label>Start Point Y: {''}
                <input
                  type="number"
                  name="startY"
                  value={this.state.startY}
                  onChange={(e) => this.setState({ startY: e.target.value })}
                />
              </label>              
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
            <button type="button" onClick={this.getAllRoutes}>Get All Routes</button>
          </div>
        </div>
      </form>
    );
  }
}
