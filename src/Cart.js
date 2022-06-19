import React from 'react';
import {Button} from 'react-bootstrap';
import './Cart.css';

function Cart() {
  return (
    <div className="cart">
        <div className="cart_box" >
          <div className="cart_img">
            <img src={''} alt="" />
            <p>Title</p>
          </div>
          <div>
          <Button variant="info">+</Button>{' '}
          <Button variant="info">0</Button>{' '}
          <Button variant="info">-</Button>{' '}
          </div>
          <div>
          <Button variant="secondary">Remove</Button>{' '}
          
          </div>
        </div>
    </div>
  )
}

export default Cart