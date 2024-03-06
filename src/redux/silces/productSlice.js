import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const createProduct = createAsyncThunk(
  "createProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("api/admin/products/createproducts", data);
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create product");
    }
  }
);
//r4ead
export const showProduct = createAsyncThunk("showProduct", async (_, { rejectWithValue })=>{
  

  try {
    const response = await axios.get("api/admin/products/getproducts")
    const result = await response.data;
    console.log(result);
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }

})
//delete
export const deleteProduct = createAsyncThunk("deleteProduct", async (id, { rejectWithValue })=>{
  const response = await axios.delete(`api/admin/product/delete/${id}`)

  try {
    const result = await response.data();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }

})
//update
export const updateProduct = createAsyncThunk("updateProduct", async (data, { rejectWithValue }) => {
  
  const response = await axios.put(
    `api/admin/products/updateproducts/${data.id}`,data);

  try {
    const result = await response.data();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
})

const productDetail = createSlice({
  name: "ProductDetail",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No need for any reducers here, use only createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(showProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(showProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products= action.payload;
      })
      .addCase(showProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload;
        if(id){
          state.products= state.products.filter((ele)=> ele.id !== id)
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

  },
});

export default productDetail.reducer;

