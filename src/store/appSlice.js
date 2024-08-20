import { createSlice } from "@reduxjs/toolkit";


const shopSlice = createSlice({
    name:'e-app',
    initialState:{
        item:[]
    },
    reducers:{
        add:(state,action)=>{
             state.item.push(action.payload)
        }
    }

})
export const {add} = shopSlice.actions
export default shopSlice.reducer