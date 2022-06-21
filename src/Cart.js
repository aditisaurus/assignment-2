import React, {useEffect, useState} from 'react';
import {Button, Badge} from 'react-bootstrap';
import './Cart.css';

function Cart({setCartList, cartList, counter, setCounter}) {

    
  useEffect(() =>{

  },[cartList])

  const handleChange = (value, d,event) => {
    event.stopPropagation();
    const c = counter + d;

    setCounter(c);
  };

  
    
    const remove = (id, event) => {
        event.stopPropagation();
        setCartList(cartList.filter((i)=>(i.id !== id)))
       
      }
  


  return (
    <div className="cart">
        {cartList?.map((value) => (
        <div className="cart_box" >
          <div className="cart_img">
            <img src={value.image} alt="" />
            <h6> <Badge bg="secondary">{value.title}</Badge></h6> 
          </div>
          <div>
          <Button variant="info" onClick={(e) => handleChange(value, 1, e)}>+</Button>{' '}
          <Button variant="info">{value.frequency}</Button>{' '}
          <Button variant="info" onClick={(e) => handleChange(value, -1, e)}>-</Button>{' '}
          </div>
          <div>
          <Button variant="secondary" id={value.id} onClick={(e)=>remove(value.id, e)}>Remove</Button>{' '}
          
          </div>
        </div>
        ))}
        
    </div>
  )
}

export default Cart