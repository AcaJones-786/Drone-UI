//Check layout of section vs forms, divs and backgrounds
import React, { useState } from 'react';
// import Cart from '../components/cart';
import "../App.css";

const Grid = {display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '3em'};

const OrderPage = () => {

    const itemsData = [
        { name: 'Bread', price: 18 },
        { name: 'Milk', price: 25 },
        { name: 'Cheese', price: 76 },
        { name: 'Onions', price: 18 },
        { name: 'Chocolate', price: 36 },
      ];
    
      const [selectedItems, setSelectedItems] = useState([]);
    
      const handleItemSelect = (item) => {
        setSelectedItems([...selectedItems, item]);
      };
    
      const handleItemRemove = (item, index) => {
        const updatedItems = [...selectedItems];
        updatedItems.splice(index, 1);
        setSelectedItems(updatedItems);
      };
    
      const totalCost = selectedItems.reduce((total, item) => {
        const selectedItem = itemsData.find((data) => data.name === item);
        return total + (selectedItem ? selectedItem.price : 0);
      }, 0);
          

    return(
        <>
            <section className="container"  style={Grid}>
                <div>    

                    <form style={{width: '100%'}}>
                    <h1>Order</h1>

                    <h3 className="lead">
                        Fill in the below details to place an order:
                    </h3>
                        <div style={{marginBottom: '1em'}} className="dropdown">
                            <button style={{width: '100%', textAlign: 'center', backgroundColor: 'white', color: '#5A5A5A', borderRadius: '25px', margin: '10px'}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose Store
                            </button>
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="#">Makro</a></li>
                                <li><a className="dropdown-item" href="#">Pick n' Pay</a></li>
                                <li><a className="dropdown-item" href="#">Shoprite</a></li>
                            </ul>
                        </div>
                        <div style={{marginBottom: '1em'}} className="dropdown">
                            <button style={{width: '100%', textAlign: 'center', backgroundColor: 'white', color: '#5A5A5A', borderRadius: '25px', margin: '10px 5px'}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Items
                            </button>
                            <ul className="dropdown-menu">
                                {itemsData.map((item) => (
                                    <li key={item.name}>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => handleItemSelect(item.name)}
                                    >
                                        {item.name} - R{item.price.toFixed(2)}
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <input  style={{width: '100%', textAlign: 'center', backgroundColor: 'white', color: '#5A5A5A', borderRadius: '25px', margin: '10px'}} className="form-control" type="text" placeholder="height" aria-label="default input example"></input>
                        <input  style={{width: '100%', textAlign: 'center', backgroundColor: 'white', color: '#5A5A5A', borderRadius: '25px', margin: '10px'}} className="form-control" type="text" placeholder="width" aria-label="default input example"></input>

                        <h3 className='lead'>Route Details: </h3>
                        <input style={{width: '100%', textAlign: 'center', backgroundColor: 'white', color: '#5A5A5A', borderRadius: '25px', margin: '10px'}} className="form-control" type="text" placeholder="Id" aria-label="default input example"></input>
                        <input style={{width: '100%', textAlign: 'center', backgroundColor: 'white', color: '#5A5A5A', borderRadius: '25px', margin: '10px'}} className="form-control" type="text" placeholder="status (for the dashboard)" aria-label="default input example"></input>
                        
                    </form>
                </div>
                
                <form>
                <div><h1>
                        Cart
                    </h1>
                    <h4>Selected Items:</h4>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li style={{marginTop: '1em'}} key={index}>{item} <button style={{color: 'white', backgroundColor:'#6B8656',margin:'15px', padding:'5px', borderRadius:'10px', borderColor:'#6B8656'}} onClick={() => handleItemRemove(item, index)}>Remove</button></li>
                        ))}
                    </ul>
                </div>
                </form>
                    
            </section>
            <section className="container">
            <form>
            <h2>
                    Order Finalization
                </h2>
                <p id="TotalCost">
                    Total Cost: R{totalCost.toFixed(2)}
                </p>
            </form>
                

            </section>
        </>
    )
}

export default OrderPage;