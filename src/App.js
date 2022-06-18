import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
      })
  }, [])

  return (
    <div className="App">
      <Header/>
      <Main 
        products={products}
      />
    </div>
  );
}

export default App;
