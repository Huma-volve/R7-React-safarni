import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// ======================
// Types
// ======================

export interface SearchParams {
  origin: string;
  destination?: string;
  date?: string;
  passengers?: number;
}

export interface Flight {
  id: string;
  airline: string;
  price: number;
  duration: string;
  from: string;
  to: string;
  departure_time?: string;
  arrival_time?: string;
  origin:any;
  airport_code:any;
  duration_minutes:number;
  date:string
}

export interface ApiSeat {
  id: number;
  seat_number: string; // e.g., "A1"
  status: "available" | "reserved" | "blocked";
  price: string; // e.g., "1881.00"
  is_available: boolean;
}

interface FlightState {
  searchParams: SearchParams | null;
  flights: Flight[];
  selectedFlight: Flight | null;
  apiSeats: ApiSeat[];
  selectedSeat: string | null;
  loading: boolean;
  error: string | null;
  bookingData: {
    origin?: string;
    destination?: string;
    date?: string;
    passengers?: number;
    selectedFlight?: Flight;
    selectedSeat?: string;
    passengerInfo?: {
      name: string;
      age: number;
      gender: string;
    };
  } | null;
}

// ======================
// Initial State
// ======================

const initialState: FlightState = {
  searchParams: null,
  flights: [],
  selectedFlight: null,
  apiSeats: [],
  selectedSeat: null,
  loading: false,
  error: null,
  bookingData: null,
};

// ======================
// Thunks (API Calls)
// ======================

// 1) Search Flights
export const searchFlights = createAsyncThunk<Flight[], SearchParams>(
  "flight/searchFlights",
  async ({ origin }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://round7-safarni-team-one.huma-volve.com/api/v1/search?q=${origin}&types[]=flights`);
      console.log("Search Flights Response:", res.data);
      return res.data;
    } catch (error: any) {
      console.error("Search Flights Error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to search flights"
      );
    }
  }
);

// 2) Get Seats for Selected Flight
export const fetchSeats = createAsyncThunk<ApiSeat[], string>(
  "flight/fetchSeats",
  async (flightId, { rejectWithValue }) => {
    try {
      const url = `https://round7-safarni-team-one.huma-volve.com/api/${flightId}/seats`;
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("Fetch Seats Response:", res.data);

      const seats: ApiSeat[] = [];
      const seatDetails = res.data?.data?.seats_details;
      if (seatDetails) {
        for (const cls in seatDetails) {
          if (seatDetails[cls]?.seats) {
            seats.push(...seatDetails[cls].seats);
          }
        }
      }
      return seats;
    } catch (error: any) {
      console.error("Fetch Seats Error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch seats"
      );
    }
  }
);

// ======================
// Slice
// ======================

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<SearchParams>) => {
      state.searchParams = action.payload;
    },
    chooseFlight: (state, action: PayloadAction<Flight>) => {
      state.selectedFlight = action.payload;
    },
    chooseSeat: (state, action: PayloadAction<string>) => {
      state.selectedSeat = action.payload;
    },
    resetBooking: (state) => {
      state.selectedFlight = null;
      state.selectedSeat = null;
      state.apiSeats = [];
      state.flights = [];
      state.error = null;
      state.loading = false;
      state.bookingData = null;
    },

    // ✅ Actions جديدة لدعم bookingData
    setBookingData: (
      state,
      action: PayloadAction<FlightState["bookingData"]>
    ) => {
      state.bookingData = action.payload;
    },
    updateBookingData: (
      state,
      action: PayloadAction<Partial<NonNullable<FlightState["bookingData"]>>>
    ) => {
      if (!state.bookingData) {
        state.bookingData = {};
      }
      state.bookingData = { ...state.bookingData, ...action.payload };
      console.log("state.bookingData");
      console.log(state.bookingData);
    },
    setPassengerInfo: (
      state,
      action: PayloadAction<{ name: string; age: number; gender: string }>
    ) => {
      if (!state.bookingData) {
        state.bookingData = {};
      }
      state.bookingData.passengerInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // SEARCH FLIGHTS
      .addCase(searchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // FETCH SEATS
      .addCase(fetchSeats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeats.fulfilled, (state, action) => {
        state.loading = false;
        state.apiSeats = action.payload;
      })
      .addCase(fetchSeats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// ======================
// Export
// ======================
export const {
  setSearchParams,
  chooseFlight,
  chooseSeat,
  resetBooking,
  setBookingData,
  updateBookingData,
  setPassengerInfo,
} = flightSlice.actions;

export default flightSlice.reducer;
