import React from 'react';
import { updateIdPtoduct } from '../action/productAction';

const findProduct = (id) => {
 return async (dispatch, getState)=>{
  const res = await fetch(`https://bd-tech-server-tau.vercel.app/product/${id}`)
  const data = await res.json()
  if(data){
   dispatch(updateIdPtoduct(data))
  }
 }
 }


export default findProduct;