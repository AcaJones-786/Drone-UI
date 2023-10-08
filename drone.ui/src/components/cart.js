import React, { useState } from 'react';

function ShoppingCart() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div>
      <div style={{ marginBottom: '1em' }} className="dropdown">
        <button
          style={{
            width: '100%',
            textAlign: 'left',
            backgroundColor: 'white',
            color: '#5A5A5A',
          }}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Store
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemSelect('Bread')}
            >
              Bread
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemSelect('Milk')}
            >
              Milk
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemSelect('Cheese')}
            >
              Cheese
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemSelect('Onions')}
            >
              Onions
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemSelect('Chocolate')}
            >
              Chocolate
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4>Selected Items:</h4>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
