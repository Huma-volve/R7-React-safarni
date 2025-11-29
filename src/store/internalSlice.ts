import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Product = any;

interface ProductState {
  product: Product | [];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: [],
  loading: false,
  error: null,
};

export const fetchinternal = createAsyncThunk(
  "internal/fetchinternal",
  async (search: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://round7-safarni-team-one.huma-volve.com/api/v1/tours/search?q=${search}&page=1&page_size=20`
      );
      console.log("internal");
      console.log(res.data.data);
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.response?.data ||
          error.message ||
          "Not Found"
      );
    }
  }
);

const internalSlice = createSlice({
  name: "internal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchinternal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchinternal.fulfilled, (state, action) => {
        state.product = action.payload || [];
        state.loading = false;
      })
      .addCase(fetchinternal.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default internalSlice.reducer;
