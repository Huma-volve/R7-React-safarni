import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
interface Product {
  id: number;
  is_favorited?: boolean;
  [key: string]: unknown;
}

interface ProductState {
  product: Product[];
  loading: boolean;
  error: string | null;
  loadingItems: number[];
}

const initialState: ProductState = {
  product: [],
  loadingItems: [],
  loading: false,
  error: null,
};

// ---- fetch Tours ----

export const fetchinternal = createAsyncThunk(
  "internal/fetchinternal",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://round7-safarni-team-one.huma-volve.com/api/v1/tours?page=1&page_size=20`
      );
      return res.data.data;
    } catch (err) {
      let errorMessage = "Not Found";

      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      return rejectWithValue(errorMessage);
    }
  }
);

// ---- search Tours ----
export const searchInternal = createAsyncThunk(
  "internal/searchinternal",
  async (search: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://round7-safarni-team-one.huma-volve.com/api/v1/tours/search?q=${search}&page=1&page_size=20&category=tours`
      );
      return res.data.data;
    } catch (err) {
      let errorMessage = "Not Found";
      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      return rejectWithValue(errorMessage);
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
    } catch (err) {
    let errorMessage = "Not Found";

    if (axios.isAxiosError(err)) {
      errorMessage = err.response?.data?.message || err.message;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    return rejectWithValue(errorMessage);
  }
  }
);

const internalSlice = createSlice({
  name: "internal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchinternal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchinternal.fulfilled, (state, action) => {
        state.product = (action.payload || []).map((item: Product) => ({
          ...item,
          is_favorited: item.is_favorited ?? false, 
        }));
        state.loading = false;
      })
      .addCase(fetchinternal.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // SEARCH INTERNAL
      .addCase(searchInternal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchInternal.fulfilled, (state, action) => {
        state.product = (action.payload || []).map((item: Product) => ({
          ...item,
          is_favorited: item.is_favorited ?? false, 
        }));
        state.loading = false;
      })
      .addCase(searchInternal.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // TOGGLE FAVORITE
      .addCase(toggleFavorite.pending, (state, action) => {
        state.loadingItems.push(action.meta.arg.item_id);
        state.error = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const { is_favorited } = action.payload;
        const itemId = action.meta.arg.item_id;
        state.product = state.product.map((item: Product) =>
          item.id === itemId ? { ...item, is_favorited } : item
        );
        state.loadingItems = state.loadingItems.filter((id) => id !== itemId);
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        const itemId = action.meta.arg.item_id;
        state.error = action.payload as string;
        state.loadingItems = state.loadingItems.filter((id) => id !== itemId);
      });
  },
});

export default internalSlice.reducer;
