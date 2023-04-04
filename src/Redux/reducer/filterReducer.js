import { ADD_ACTION_CLEAR, ADD_ACTION_DATE, ADD_TIME_DATE, ADD_TO_BRAND, ADD_TO_MODAL, ADD_TO_PICKER, ADD_TO_STOCK, UPDATE_ID_PRODUCT } from "../action/actionTypes";

const initialState = {
   brands:[],
   stock: false,
 updateId:[],
 product:[],
 dateTime:[],
 actionDay:[]
}
const filterReducer = (state= initialState, action)=>{
   console.log(state)
 const selectProduct = state.product.find(product=> product.id === action.payload.id)
 switch(action.type){
case ADD_ACTION_CLEAR:
   return{
      ...state,
      brands:action.payload,
      stock: action.payload,
      actionDay: action.payload
   }

   case ADD_TIME_DATE:
      return{
         ...state,
         dateTime: action.payload
      }
   case ADD_ACTION_DATE:
    if(!state.actionDay.includes(action.payload)){
      return{
         ...state,
         actionDay:[...state.actionDay, action.payload]
      }
    }else{
      return{
         ...state,
         actionDay: state.actionDay.filter(day=>day !== action.payload)
      }
    }
   case ADD_TO_BRAND:
      if(!state.brands.includes(action.payload)){

         return{
            ...state,
            brands:[...state.brands, action.payload]
         }
      }else{
         return{
            ...state,
            brands: state.brands.filter(brand=>brand !== action.payload)
         }
      }
      case ADD_TO_STOCK:
         return{
            ...state,
            stock: !state.stock
         }
  case ADD_TO_MODAL:
   if(selectProduct){
    const newProduct =  state.product.filter(product=>product.id !== selectProduct.id)
    return{
     ...state,
     product:[...newProduct, action.payload]
    }
   }
   return{
    ...state,
    product:[...state.product, {...action.payload, id: 1}] 
   
   }
case ADD_TO_PICKER:
 return{
...state,
dateTime:action.payload
 }
 case UPDATE_ID_PRODUCT:
   return{
      ...state,
      updateId:action.payload
   }
  default:
  return state
 }
}
export default filterReducer;