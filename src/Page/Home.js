import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import fetchProduct from '../Redux/Thunk/fetchProduct';
import { brandAction, clearAction, dateAction, stockAction } from '../Redux/action/productAction';
import { useForm } from 'react-hook-form';


const Home = () => {
// console.log(products)
const { register, handleSubmit } = useForm();


const products = useSelector((state)=> state.product.products)
const filter = useSelector((state)=> state.filter)
const {brands, stock, actionDay}=filter;
const dispatch = useDispatch()
// console.log(cart)
useEffect(()=>{
dispatch(fetchProduct())
},[dispatch])
const activeClass = "text-white  bg-indigo-500 border-white";
const submit = (data)=>{
  const date = {
    date: data.date
  }
  dispatch(dateAction(date.date))
  // console.log(date)
}
let content;
if(products.length){
  content =  products.map(product=><ProductCard key={product._id} product={product} ></ProductCard>)

}
if(products.length && (stock || brands.length || actionDay.length)){
content = products.filter(product=>{
  if(stock){
   return  product.status === true
  }
  return product
}).filter(product=>{
  if(brands.length){
    return brands.includes(product.brand)
  }
  return product
}).filter(product=>{
  if(actionDay.length){
    return actionDay.includes(product.date)
  }
  return product;
}).map(product=><ProductCard key={product._id} product={product} ></ProductCard>)
}
// console.log(dispatch)
 return (
<div>
  {/* <p>{value}</p> */}

  <div className='mb-10 flex justify-end gap-5 mt-5'>

  <button onClick={()=>dispatch(clearAction(''))}
          className={`btn btn-outline  border px-3 py-2 rounded-full font-semibold  `}
        >
          Action Remove
        </button>
<form action="" onSubmit={handleSubmit(submit)}>
<div  className={`border px-3 py-2 rounded-full font-semibold ${actionDay.length ? activeClass : null}`}>
<input className='text-indigo-500' type="date" name="date" id="date"  {...register("date")} /> 
<input type="submit" value="Submit" /> 
          </div> 
  </form> 
    
    
        <button onClick={()=>dispatch(stockAction())}
          className={`border px-3 py-2 rounded-full font-semibold ${ stock ? activeClass : null} `}
        >
          In Stock
        </button>
        <button onClick={()=>dispatch(brandAction('amd')) } className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}>
          AMD
        </button>
        <button onClick={()=>dispatch(brandAction('intel'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}>
          Intel
        </button>
      </div>
<div className='grid  lg:grid-cols-3 mt-10  mx-auto md:grid-cols-2 gap-10 ' style={{width:"95%"}} >
{
  content
}
  </div>
</div>
 );
};

export default Home;