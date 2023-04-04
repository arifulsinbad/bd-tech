import { json } from "react-router-dom"
import { LoadToPtoduct } from "../action/productAction"

const fetchProduct = ()=>{
 return async (dispatch, getState)=>{
  const res = await fetch('https://bd-tech-server-tau.vercel.app/products')
  const data = await res.json()
  if(data.length){
   dispatch(LoadToPtoduct(data))
   
  }
 }
}
export default fetchProduct;