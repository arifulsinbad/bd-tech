import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToModal, addToRated, dateTimeAction, productAdd, removeToCart } from '../Redux/action/productAction';
import { useLocation } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductCard = ({product}) => {
  const {image, model, price, rating, quantity, _id, view, } = product
  
  const dispatch = useDispatch()
  const {pathname} = useLocation()
 
 return (
  <div className='' > 
   <div className="card  bg-base-100 shadow-xl"  style={{height:"40em ", width:"100%"}}>
<div className='h-96 w-full '>
<figure><img  src={image}  alt="Shoes"  /></figure>

</div>
{pathname.includes('cart') &&
      <p className='position absolute left-3 bg-amber-400 rounded-full px-2'>{quantity}</p>

}
  <div className="card-body" >
    
    <h2 className="card-title w-full">{model}</h2>
    <span className=''>
    <p>Price : {price}</p>
    <span className='flex '>
    <p>Rating : {rating}</p>
      {view &&
        <p>Views : {view}</p>
      }
    </span>
    <label htmlFor="my-modal"  onClick={()=>dispatch(addToModal(product), )}><p>........ <span className='text-indigo-600 link-hover'>MORE</span></p>
</label>
    </span>
    <div className="card-actions justify-end  " style={{position:"absolute", bottom:"20px", right:"20px"}}>
{ !pathname.includes('cart') && <button className="btn btn-primary  " onClick={()=>dispatch(productAdd(product))}>Add to Card </button>
}
{   pathname.includes('cart') && <button className="btn btn-primary  " onClick={()=>dispatch(removeToCart(product))}>REMOVE_TO_CART</button>
}  
{ !pathname.includes('cart') && <button className="btn btn-primary  " onClick={()=>dispatch(productAdd(product))}>Wishlist</button>
}    </div>
  </div>
</div>

  </div>
 );
};

export default ProductCard;