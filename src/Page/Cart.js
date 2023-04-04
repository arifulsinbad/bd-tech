import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Cart = () => {
 const cart = useSelector((state)=> state.product.cart)

 return (
  <div  className='grid  lg:grid-cols-3 mt-10  mx-auto md:grid-cols-2 gap-10 ' style={{width:"95%"}}>
   {
    cart.sort((a, b)=> a.cartPosition - b.cartPosition).map(product=><ProductCard key={product._id} product={product}></ProductCard>)
   }
  </div>
 );
};

export default Cart;