import React, {useEffect} from 'react';
import {Button, Badge} from 'react-bootstrap';
import './Cart.css';

function Cart({setCartList, cartList}) {

  useEffect(() =>{

  },[cartList])
  return (
    <div className="cart">
        {cartList?.map((value) => (
        <div className="cart_box" >
          <div className="cart_img">
            <img src={value.image} alt="" />
            <h6> <Badge bg="secondary">{value.title}</Badge></h6> 
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
        ))}
        
    </div>
  )
}

export default Cart