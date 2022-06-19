import React from 'react'
import {Badge,Dropdown, Row, Col}from 'react-bootstrap';
import Cart from './Cart';
import './Header.css';

function Header() {
  return (
    <Row className="header">
        <Col><h1>
        <Badge className="float-left" bg="info">Shopping Cart</Badge>
      </h1>
      </Col>
      
      <Col>
    <div className="float-end">
        
      <Badge className="badge" bg="dark">0</Badge>

      <Dropdown className="cart-dropdown">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="info" text="light">
          Cart
        </Dropdown.Toggle>

        <Dropdown.Menu variant="info">
          <Dropdown.Item href="#/action-1" active>
            <Cart/>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="username">
      <Badge bg="info">Username</Badge>{' '}
      </div>
      </div>
      </Col>
    </Row>
  )
}

export default Header