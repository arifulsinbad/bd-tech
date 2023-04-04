import {POST_TO_PRODUCT, ADD_TO_CART , ADD_TO_MODAL, ADD_TO_PICKER, ADD_TO_TOPRATED, LOADED_TO_PRODUCT, REMOVE_TO_CART, DELETE_TO_PRODUCT, UPDATE_TO_PRODUCT, UPDATE_ID_PRODUCT, ADD_TO_BRAND, ADD_TO_STOCK, ADD_ACTION_CLEAR, ADD_ACTION_DATE, ADD_TIME_DATE} from "./actionTypes"

export const productAdd =(product)=>{
 return{
  type: ADD_TO_CART,
  payload: product
 }
}

export const removeToCart =(product)=>{
 return{
  type: REMOVE_TO_CART,
  payload: product
 }
}

export const addToRated =(product)=>{
 return{
  type: ADD_TO_TOPRATED,
  payload: product
 }
}
export const addToModal =(product)=>{
 return{
  type: ADD_TO_MODAL,
  payload: product
 }
}
export const addToPcker =(date)=>{
 return{
  type: ADD_TO_PICKER,
  payload: date
 }
}
export const LoadToPtoduct =(product)=>{
 return{
  type: LOADED_TO_PRODUCT,
  payload: product
 }
}
export const postToPtoduct =(product)=>{
 return{
  type: POST_TO_PRODUCT,
  payload: product
 }
}
export const updateToPtoduct =(product)=>{
 return{
  type: UPDATE_TO_PRODUCT,
  payload: product
 }
}
export const updateIdPtoduct =(id)=>{
 return{
  type: UPDATE_ID_PRODUCT,
  payload: id
 }
}
export const deleteToPtoduct =(id)=>{
 return{
  type: DELETE_TO_PRODUCT,
  payload: id
 }
}
export const brandAction =(data)=>{
 return{
  type: ADD_TO_BRAND,
  payload: data
 }
}
export const stockAction =()=>{
 return{
  type: ADD_TO_STOCK,
  
 }
}
export const clearAction =(data)=>{
 return{
  type: ADD_ACTION_CLEAR,
  payload: data
  
 }
}
export const dateAction =(data)=>{
 return{
  type: ADD_ACTION_DATE,
  payload: data
 }
}
export const dateTimeAction =(data)=>{
 return{
  type: ADD_TIME_DATE,
  payload: data
 }
}