import { configureStore } from "@reduxjs/toolkit";
import  ShopSlice from './appSlice'

const shopStore = configureStore({
   reducer:{
    shop: ShopSlice
   }
})
export default  shopStore