import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Brand {
    id: string;
    name: string;
    count: number;
    logo: string;
}

interface BrandState {
    brands: Brand[];
    loading: boolean;
    error: string | null;
}


const initialState: BrandState = {
    brands: [],
    loading: false,
    error: null,
    
};


export const fetchBrands = createAsyncThunk(
    "brands/fetchBrands",
    async () => {
        const res = await axios.get("https://round7-safarni-team-one.huma-volve.com/api/v1/cars/brands");
        return res.data.data; 

    
    }
);

// 3️⃣ Slice
const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = action.payload as Brand[];
            })
            .addCase(fetchBrands.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch brands";
            });
    },
});

export default brandSlice.reducer;
