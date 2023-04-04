import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dasboard/AddProduct";
import AllUser from "../Dasboard/AllUser";
import DashboardLayout from "../Dasboard/DashboardLayout";
import ProductList from "../Dasboard/ProductList";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import TopRated from "../Page/TopRated";
import Cart from "../Page/Cart";
import EditProduct from "../Dasboard/EditProduct";

export const router = createBrowserRouter([
{
 path:'/', element:<Main></Main>,
 children:[
  {
   path:"/", element:<Home></Home>
  },
  {
   path:"/topRated", element:<TopRated></TopRated>
  },
  {
   path:"/cart", element:<Cart></Cart>
  }
 ]
},
{
path:'/dashboardLayout', element:<DashboardLayout></DashboardLayout>,
children:[
{ 
 path:'/dashboardLayout/allUser', element:<AllUser></AllUser>
},
{ 
 path:'/dashboardLayout/productList', element:<ProductList></ProductList>
},
{ 
 path:'/dashboardLayout/addProduct', element:<AddProduct></AddProduct>
},
{ 
 path:'/dashboardLayout/editProduct', element:<EditProduct></EditProduct>
},
]
}

])