import { useEffect, useState } from 'react';
import axios from 'axios';

function FakeStoreAPI() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
     axios.get('https://fakestoreapi.com/products')
     .then(res => setProducts(res.data))
  }, []);

  return products
}

export default FakeStoreAPI;