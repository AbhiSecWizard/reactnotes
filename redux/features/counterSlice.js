import { createSlice } from "@reduxjs/toolkit";


export const couterSlice = createSlice({
  name :"counter",
  initialState :{
    value : 0
  },
  reducers :{
    increment : (state)=>{
       state.value += 1 
    },
    decrement :(state)=>{
       state.value -= 1
    },
    IncrementByAmount :(state,actions)=>{
       state.value += actions.payload
    },
  }

})

export const {increment,decrement, IncrementByAmount} = couterSlice.actions
export default couterSlice.reducer
