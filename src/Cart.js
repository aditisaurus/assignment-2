import React, {useEffect} from 'react';
import {Button, Badge} from 'react-bootstrap';
import './Cart.css';

function Cart({setCartList, cartList}) {

  useEffect(() =>{

  },[cartList])

  const handleChange = (value, d) => {
    const ind = cartList.indexOf(value);
    const arr = cartList;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartList([...arr]);
  };


  return (
    <div className="cart">
        {cartList?.map((value) => (
        <div className="cart_box" >
          <div className="cart_img">
            <img src={value.image} alt="" />
            <h6> <Badge bg="secondary">{value.title}</Badge></h6> 
          </div>
          <div>
          <Button variant="info" onClick={() => handleChange(value, 1)}>+</Button>{' '}
          <Button variant="info">1</Button>{' '}
          <Button variant="info" onClick={() => handleChange(value, -1)}>-</Button>{' '}
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