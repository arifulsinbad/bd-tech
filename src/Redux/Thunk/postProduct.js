import { postToPtoduct } from "../action/productAction"

const postProduct =(product)=>{
 return async (dispatch, getState)=>{
  const res = await fetch('https://bd-tech-server-tau.vercel.app/products',{
   method:"POST",
   body: JSON.stringify(product),
   headers:{
    "content-type" : "application/json"
   }
  })
  const data = await res.json()
  if(data.acknowledged){
   alert('Post Success')
   dispatch(postToPtoduct(product))
  }
 }
 
}
export default postProduct;