import { useEffect, useState } from 'react';
import axios from 'axios';

function GetProductByID(productID) {
  const [product, setProduct] = useState({});

  useEffect(() => {
     axios.get(`https://fakestoreapi.com/products/${productID}`)
     .then(res => setProduct(res.data))
  }, [productID]);

  return product
}

export default GetProductByID;