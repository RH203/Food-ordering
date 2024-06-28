import {createSlice} from "@reduxjs/toolkit";
import Products from "@assets/data/products";

const initialState = {
  product: []
}

const productSlice = createSlice({
  name: "product",
  initialState,

})