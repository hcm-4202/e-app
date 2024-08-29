import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "e-app",
  initialState: {
    cartItem: [],
    headerCount:0,
    productCount:0,
    totalPrice:0,
    token:''
  },
  reducers: {
    add: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].itemCount += 1;
      } else {
        const temp = { ...action.payload, itemCount: 1 };
        state.cartItem.push(temp);
      }
      state.headerCount = state.headerCount + 1
       state.totalPrice = 0
      state.cartItem.map((items) => {
        return state.totalPrice = state.totalPrice +  items.price * items.itemCount;
      });
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.cartItem[itemIndex].itemCount > 1) {
        state.cartItem[itemIndex].itemCount -= 1;
      } else if (state.cartItem[itemIndex].itemCount === 1) {
        const filterItems = state.cartItem.filter((val) => {
          return val.id !== action.payload.id;
        });
        state.cartItem = filterItems;
      }
      if(state.headerCount >= 1){
        state.headerCount = state.headerCount - 1
      }
      state.totalPrice = 0
      state.cartItem.map((items) => {
       return state.totalPrice = state.totalPrice +  items.price * items.itemCount;
      });
    },
    remove: (state) => {
      state.cartItem.length = 0;
      state.headerCount = 0
    },
    addToken :(state,action) =>{
        state.token = action.payload
    }
  },
});
export const { add, decrease, remove,addToken } = shopSlice.actions;
export default shopSlice.reducer;
