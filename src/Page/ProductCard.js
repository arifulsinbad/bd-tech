import React from 'react';

const ProductCard = ({product}) => {
  const {image, model, price, rating} = product
 return (
  <div className='' > 
   <div className="card  bg-base-100 shadow-xl" style={{height:"38em ", width:"100%"}}>
<div className='h-96 w-full '>
<figure><img  src={image}  alt="Shoes"  /></figure>

</div>
  <div className="card-body">
    <h2 className="card-title w-full">{model}</h2>
    <span className=''>
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
    </span>
    <div className="card-actions justify-end  " style={{position:"absolute", bottom:"20px", right:"20px"}}>
      <button className="btn btn-primary  ">Add to Card Details</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default ProductCard;