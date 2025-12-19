import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Car {
    id: number;
    name: string;
    model: string;
    price: number;
    image: string;
    transmission: string;
    power: number;
    maxSpeed: number;
    acceleration: number;
    doors: number;
    passengers: number;
    luggage: number;
    fuelType: string;
    seats_count: number;
    fuel_type: string;
    date: [];
}

export const fetchCars = createAsyncThunk<Car[]>(
    "cars/fetchCars",
    async () => {
        const res = await axios.get<{ data: Car[] }>
        ("https://round7-safarni-team-one.huma-volve.com/api/v1/cars");
        return res.data.data;
    }
);

interface CarState {
    data: Car[];
    loading: boolean;
    error: string | null;
}

const initialState: CarState = {
    data: [],
    loading: false,
    error: null,
};

// 3️⃣ slice
const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCars.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to load cars";
            });
    },
});

export default carSlice.reducer;
