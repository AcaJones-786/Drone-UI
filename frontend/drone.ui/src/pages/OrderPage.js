import React, { useState } from 'react';
// import Cart from '../components/cart';

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
                    <h1>Order</h1>

                    <p class="lead">
                        Fill in the below details to place an order:
                    </p>    

                    <form style={{width: '100%'}}>
                        <div style={{marginBottom: '1em'}} class="dropdown">
                            <button style={{width: '100%', textAlign: 'left', backgroundColor: 'white', color: '#5A5A5A'}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose Store
                            </button>
                            <ul class="dropdown-menu" >
                                <li><a class="dropdown-item" href="#">Makro</a></li>
                                <li><a class="dropdown-item" href="#">Pick n' Pay</a></li>
                                <li><a class="dropdown-item" href="#">Shoprite</a></li>
                            </ul>
                        </div>
                        <div style={{marginBottom: '1em'}} class="dropdown">
                            <button style={{width: '100%', textAlign: 'left', backgroundColor: 'white', color: '#5A5A5A'}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <p class="lead">Delivery Details:</p>
                        <input style={{marginBottom: '1em'}} class="form-control" type="text" placeholder="House No. / Unit No." aria-label="default input example"></input>
                        <input style={{marginBottom: '1em'}} class="form-control" type="text" placeholder="Street Name" aria-label="default input example"></input>
                        <input style={{marginBottom: '1em'}} class="form-control" type="text" placeholder="Complex / Estate Name" aria-label="default input example"></input>
                        <input style={{marginBottom: '1em'}} class="form-control" type="text" placeholder="Postal Code" aria-label="default input example"></input>
                        <input style={{marginBottom: '1em'}} class="form-control" type="text" placeholder="Country" aria-label="default input example"></input>
                    </form>
                </div>
                <div>
                    <h1>
                        Cart
                    </h1>
                    <h4>Selected Items:</h4>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li style={{marginTop: '1em'}} key={index}>{item} <button style={{float: 'right'}} onClick={() => handleItemRemove(item, index)}>Remove</button></li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="container">
                <h2>
                    Order Finalization
                </h2>
                <p>
                    Total Cost: R{totalCost.toFixed(2)}
                </p>

            </section>
        </>
    )
}

export default OrderPage;