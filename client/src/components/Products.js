import React from 'react';
import Product from './Product';

const Products = ({ products, }) => {
  return products.map( product => (
    <Product key={product.id} {...product} />
  ));
};


export default Products;