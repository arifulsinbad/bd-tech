import { deleteToPtoduct } from "../action/productAction"

const deleteProduct = (id)=>{
 // console.log(id)
 return async (dispatch, getState)=>{
  const res = await fetch(`https://bd-tech-server-tau.vercel.app/products/${id}`,{
   method:"DELETE",
   // body:JSON.stringify(id)
   
  })
  const data = await res.json()
  if(data.acknowledged){
   alert('Delete Success')
   dispatch(deleteToPtoduct(id))
  }
 }
}
export default deleteProduct;