import React from 'react';

const ProductModal = ({product}) => {
 const  {model, brand, price, keyFeature, rating}=product;

 return (
  <div>
   <h3 className="font-bold text-lg">{model}</h3>
    <div className='flex justify-between font-semibold text-indigo-500'>
      <p>Price : {price}</p>
      <p>Brand : {brand}</p>
      <p>Rating : {rating}</p>
    </div>
    <ul className='space-y-2'>
          {
          keyFeature.map((feature) => {
            return (
              <li key={feature} className='text-sm '>
                {feature}
              </li>
            );
          })}
        </ul>
  </div>
 );
};

export default ProductModal;