import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Product = any;

interface ProductState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://round7-safarni-team-one.huma-volve.com/api/v1/tours/${id}?locale=en`
      );
      console.log(res.data.data);
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.response?.data ||
          error.message ||
          "Failed to fetch product"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
