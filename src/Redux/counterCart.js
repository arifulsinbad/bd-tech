import { ADD_TO_CART, ADD_TO_MODAL, ADD_TO_TOPRATED, UPDATE_ID_PRODUCT } from "./action/actionTypes"

const counterCart = (store)=>(next)=>(action)=>{
 const state = store.getState()
 const cart = state.product.cart
 const topRated = state.product.topRated
 const product = state.product.product
 if(action.type === ADD_TO_CART){
  const newAction = {
   ...action,
   payload:{...action.payload, cartPosition: cart.length}
  }
  return next(newAction)
 }
 if(action.type === ADD_TO_TOPRATED){
  const newAction = {
   ...action,
   payload:{...action.payload, cartPosition: topRated.length}
  }
  return next(newAction)
 }
 if(action.type === ADD_TO_MODAL){
  const newAction = {
   ...action,
   payload:{...action.payload, id : 1}
  }
  return next(newAction)
 }
 if(action.type === UPDATE_ID_PRODUCT){
  const newAction = {
   ...action,
   payload:{...action.payload}
  }
  return next(newAction)
 }
 return next(action)
}
export default counterCart;