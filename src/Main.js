import React, {useState} from 'react';
import './Main.css';
import {Row, Col, ListGroup, Button, Card, Badge}from 'react-bootstrap';

function Main({products}) {

    const [category, setCategory] = useState([products]);
    const [heading, setHeading] = useState('All Products');
  return (
    <div className="Main">
<Row>
    <Col md={4}>
    <ListGroup>
      <ListGroup.Item>No style</ListGroup.Item>
      <ListGroup.Item variant="primary">Primary</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        Success
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Danger
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
        Warning
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        Dark
      </ListGroup.Item>
    </ListGroup>
    </Col>

    <Col md={8}>

    <h3>
        <Badge bg="info" text="dark">Products under Category-1</Badge>
      </h3>
        
    <Card className="card"  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Button variant="info">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row>
    </div>
  )
}

export default Main