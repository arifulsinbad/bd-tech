import { updateToPtoduct } from "../action/productAction"

const updateProduct =(id, product)=>{
 return async (dispatch, getState)=>{
  const res = await fetch(`https://bd-tech-server-tau.vercel.app/products/${id}`,{
   method:"PUT",
   headers:{
    "content-type" : "application/json"
   },
   body: JSON.stringify(product)
  })
  const data = await res.json()
  if(data.acknowledged){
   alert('Update Success')
   dispatch(updateToPtoduct(product))
  }
 }
 
 }

export default updateProduct;