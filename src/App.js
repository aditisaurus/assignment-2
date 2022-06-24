import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [cartLength, setCartLength] = useState(cartList.length);
  const [counter, setCounter] = useState({});


  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
      })
  }, [])

  return (
    <div className="App">
      <Header setCartList={setCartList} cartList={cartList} 
      cartLength={cartLength} setCartLength={setCartLength} 
      counter={counter} setCounter={setCounter}/>
      {products.length>0 &&
      <Main 
        products={products} setCartList={setCartList} cartList={cartList} counter={counter} setCounter={setCounter}
      />}
    </div>
  );
}

export default App;
