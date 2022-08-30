import React, {useEffect} from 'react';
import {Button, Badge} from 'react-bootstrap';
import './Cart.css';

function Cart({setCartList, cartList}) {

    
  useEffect(() =>{

  },[cartList])

  const handleChange = (d, event, id, fr) => {
    console.log(cartList," Cart List")
    event.stopPropagation();
    const freq = fr+d;
    setCartList(
        cartList.map(l=>l.id==id?{...l,frequency:freq}:l)
    )
  };

  const remove = (id, event) => {
        event.stopPropagation();
        setCartList(cartList.filter((i)=>(i.id !== id)))
       
      }

  return (
    <div className="cart">
        {cartList?.map((value) => (
        value!=null&&<div className="cart_box" >
          <div className="cart_img">
            <img src={value.image} alt="" />
            <h6> <Badge bg="secondary">{value.title}</Badge></h6> 
          </div>
          <div>
          <Button variant="info" onClick={(e) => handleChange(1, e, value.id, value.frequency)}>+</Button>{' '}
          <Button variant="info">{value.frequency}</Button>{' '}
          <Button variant="info" onClick={(e) => handleChange( -1, e, value.id, value.frequency)}>-</Button>{' '}
          </div>
          <div>
          <Button variant="secondary" text="dark" id={value.id} onClick={(e)=>remove(value.id, e)}>Remove</Button>{' '}
          
          </div>
        </div>
        ))}
        
    </div>
  )
}

export default Cart