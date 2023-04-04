import React from 'react';
import { useSelector } from 'react-redux';
import ProductModal from './ProductModal';

const ProductDetails = () => {
 const product = useSelector((state)=> state.filter.product)
//  console.log(product)
 return (
  <div>
   {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">

   
     <div className="modal-box">
    
   
    {
      product.map(product=><ProductModal key={product} product={product}></ProductModal>)
    }
   
  

    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Close</label>
    </div>
  </div>
</div>
  </div>
 );
};

export default ProductDetails;