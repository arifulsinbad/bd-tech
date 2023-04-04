import { ADD_TO_CART, ADD_TO_MODAL, ADD_TO_TOPRATED, DELETE_TO_PRODUCT, LOADED_TO_PRODUCT, POST_TO_PRODUCT, REMOVE_TO_CART } from "../action/actionTypes";

const initialState = {
 test: "test",
 post: [],
 products : [],
 cart : [],
 topRated:[]
}

const productReducer = (state = initialState, action)=>{

const selectProduct = state.cart.find((product)=> product._id === action.payload._id)
const selectTopRated = state.topRated.find((product)=> product._id === action.payload._id)

 switch(action.type){
   case ADD_TO_MODAL:
      if(selectTopRated){
         const newTOprated = state.topRated.filter(product=> product._id !== selectTopRated._id)
         selectTopRated.view =selectTopRated.view + 1
      return {
         ...state,
         topRated:[...newTOprated, selectTopRated]
      }
      }
      return{
         ...state,
            topRated:[...state.topRated, {...action.payload, view : 1}]
      }
  case ADD_TO_CART:
   if(selectProduct){
      const newCart = state.cart.filter(product=> product._id !== selectProduct._id)
      selectProduct.quantity = selectProduct.quantity + 1
      return{
         ...state,
         cart:[...newCart, selectProduct]
      }
   }
   return{
      ...state,
      cart:[...state.cart,{ ...action.payload, quantity: 1}]
   }
  case REMOVE_TO_CART:
   if(selectProduct.quantity > 1){
      const newCart = state.cart.filter(product=> product._id !== selectProduct._id)
      selectProduct.quantity = selectProduct.quantity - 1;
      return{
         ...state,
         cart:[...newCart, selectProduct]
      }
   }
   return{
      ...state,
      cart: state.cart.filter(product=> product._id !== action.payload._id)
   }
case LOADED_TO_PRODUCT:
   return{
      ...state,
      products: action.payload
   }
   case POST_TO_PRODUCT:
      return{
         ...state,
         products:[...state.products, action.payload]
      }
      case DELETE_TO_PRODUCT:
         return{
            ...state,
            products: state.products.filter(product=>product._id !== action.payload._id)
            
         }
    
   default:
    return state
 }
}
export default productReducer;