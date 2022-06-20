import React, {useState, useEffect} from 'react';
import './Main.css';
import {Row, Col, ListGroup, Button, Card, Badge}from 'react-bootstrap';

function Main({products, setCartList, cartList}) {

  
    const [category, setCategory] = useState(products);
    const [heading, setHeading] = useState('Select Category to view Products');
    

    useEffect(() => {
        
    },[category]
    )

    const clothesCategory = () => {
        const selected = products.filter((product) => {
            if(product.category === 'Clothes')
            {
                return product
            }
        })

        setCategory(selected)
        setHeading('Clothes')
    }

    const clockCategory = () => {
        const selected = products.filter((product) => {
            if(product.category === 'Clocks')
            {
                return product
            }
        })

        setCategory(selected)
        setHeading('Clocks')
    }

    const watchesCategory = () => {
        const selected = products.filter((product) => {
            if(product.category === 'Watches')
            {
                return product
            }
        })

        setCategory(selected)
        setHeading('Watches')
    }

    const handleChange = (id) => {
  
        const checked = products.filter((value) => {
                        if(value.id === id)
                        {
                          return value
                        }
        });
        
         
              setCartList([...cartList,...checked]);
              console.log(cartList, " Checked");
             
      }

  return (
    <div className="Main">
<Row>
    <Col md={4}>
    <ListGroup>
      <ListGroup.Item action variant="light" onClick={clockCategory}>
      Clock
      </ListGroup.Item>
      <ListGroup.Item action variant="info" onClick={clothesCategory}>
        Clothes
      </ListGroup.Item>
      <ListGroup.Item action variant="dark" onClick={watchesCategory}>
        Watches
      </ListGroup.Item>
    </ListGroup>
    </Col>

    <Col md={8}>

    <h3>
        <Badge bg="info" text="dark">{heading}</Badge>
      </h3>
      {category.map((value) => (
    <Card className="card"  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={value.image}/>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Button variant="info" id={value.id} onClick={() =>handleChange(value.id)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    ))}
    </Col>
  </Row>
    </div>
  )
}

export default Main