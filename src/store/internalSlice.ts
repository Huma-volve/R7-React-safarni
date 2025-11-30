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

// ---- Fetch Tours ----
export const fetchinternal = createAsyncThunk(
  "internal/fetchinternal",
  async (search: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://round7-safarni-team-one.huma-volve.com/api/v1/tours/search?q=${search}&page=1&page_size=20`
      );
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

// ---- Toggle Favorite ----
export const toggleFavorite = createAsyncThunk(
  "internal/toggleFavorite",
  async (
    { category, item_id }: { category: string; item_id: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(
        `https://round7-safarni-team-one.huma-volve.com/api/v1/favorites/toggle`,
        { category, item_id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
      // FETCH INTERNAL
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
      })

      // TOGGLE FAVORITE
      .addCase(toggleFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default internalSlice.reducer;
