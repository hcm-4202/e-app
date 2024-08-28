import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "e-app",
  initialState: {
    item: [],
    header:false
  },
  reducers: {
    add: (state, action) => {
      const itemIndex = state.item.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.item[itemIndex].itemCount += 1;
      } else {
        const temp = { ...action.payload, itemCount: 1 };
        state.item.push(temp);
      }
    },
    decrease: (state, action) => {
      const itemIndex = state.item.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (state.item[itemIndex].itemCount > 1) {
        state.item[itemIndex].itemCount -= 1;
      } else if (state.item[itemIndex].itemCount === 1) {
        const filterItems = state.item.filter((val) => {
          return val.id !== action.payload.id;
        });
        state.item = filterItems;
      }
    },
    remove: (state, action) => {
      state.item.length = 0;
    },
    headerBar :(state) =>{
        state.header = !state.header
    }
  },
});
export const { add, decrease, remove,headerBar } = shopSlice.actions;
export default shopSlice.reducer;
