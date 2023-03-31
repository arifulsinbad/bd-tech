import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Home = () => {
const [products, setProduct] = useState([])
console.log(products)
useEffect(()=>{
fetch('http://localhost:5000/products')
.then(res=> res.json())
.then(data=>setProduct(data))
},[])
 return (
  <div className='grid  lg:grid-cols-3 mt-10  mx-auto md:grid-cols-2 gap-10 ' style={{width:"95%"}} >
{
 products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
}
  </div>
 );
};

export default Home;