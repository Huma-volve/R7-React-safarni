import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteItem {
  id: number;
  title: string;
  img: string;
  price: number;
  rating: number;
}

interface FavoritesState {
  list: FavoriteItem[];
  checking: boolean;
  isFavorite: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: FavoritesState = {
  list: [],
  checking: false,
  isFavorite: false,
  loading: false,
  error: null,
};

interface ApiErrorResponse {
  message: string;
}

const BASE_URL = "https://round7-safarni-team-one.huma-volve.com/api/v1";

// ⭐ 1) List Favorites
export const fetchFavorites = createAsyncThunk<
  FavoriteItem[],
  void,
  { rejectValue: string }
>("favorites/fetchFavorites", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get<{ data: FavoriteItem[] }>(
      `${BASE_URL}/favorites`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data.data;
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed");
  }
});

// ⭐ 2) Toggle Favorite (Add/Remove)
export const toggleFavorite = createAsyncThunk<
  unknown,
  { category: string; item_id: number },
  { rejectValue: string }
>("favorites/toggleFavorite", async ({ category, item_id }, thunkAPI) => {
  try {
    const token = localStorage.getItem("accessToken");

    const response = await axios.post(
      `${BASE_URL}/favorites/toggle`,
      { category, item_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed");
  }
});

// ⭐ 3) Check if Favorite
export const checkFavorite = createAsyncThunk<
  boolean,
  { category: string; item_id: string },
  { rejectValue: string }
>("favorites/checkFavorite", async ({ category, item_id }, thunkAPI) => {
  try {
    const token = localStorage.getItem("accessToken");

    const response = await axios.get(
      `${BASE_URL}/favorites/check?locale=en&category=${category}&item_id=${item_id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data?.isFavorite ?? false;
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed");
  }
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ⭐ Fetch List
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, action: PayloadAction<FavoriteItem[]>) => {
          state.loading = false;
          state.list = action.payload;
        }
      )
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      })

      // ⭐ Toggle
      .addCase(toggleFavorite.fulfilled, (state) => {
        state.error = null;
      })

      // ⭐ Check
      .addCase(checkFavorite.pending, (state) => {
        state.checking = true;
      })
      .addCase(checkFavorite.fulfilled, (state, action) => {
        state.checking = false;
        state.isFavorite = action.payload;
      })
      .addCase(checkFavorite.rejected, (state, action) => {
        state.checking = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export default favoritesSlice.reducer;
