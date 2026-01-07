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

export const fetchSearchById = createAsyncThunk(
  "compare/fetchSearchById",
  async (search: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://round7-safarni-team-one.huma-volve.com/api/v1/compare/search?category=tour&q=${search}&limit=5`
      );
      console.log("compare");
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

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchById.fulfilled, (state, action) => {
        state.product = action.payload || [];
        state.loading = false;
      })
      .addCase(fetchSearchById.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default compareSlice.reducer;
