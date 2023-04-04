import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const TopRated = () => {
 const topRated = useSelector((state)=>state.product.topRated)
 return (
<div className='grid  lg:grid-cols-3 mt-10  mx-auto md:grid-cols-2 gap-10 ' style={{width:"95%"}} >
   {
topRated.sort((a, b)=> a - b).map(product=><ProductCard key={product._id} product={product}></ProductCard>)
   }
  </div>
 );
};

export default TopRated;