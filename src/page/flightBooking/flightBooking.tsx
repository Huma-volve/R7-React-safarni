import { Box, Container, Stack, Button } from "@mui/material";
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFlights, updateBookingData } from "../../store/flight/flightSlice";
import type { AppDispatch } from "../../store/store";
import CircularProgress from "@mui/material/CircularProgress";

interface FormState {
  location: string;
  destination: string;
  departure: string;
  returnDate: string;
  passengers: string;
}

export default function FlightBooking() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [tripType, setTripType] = useState("round");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormState>({
    location: "",
    destination: "",
    departure: "",
    returnDate: "",
    passengers: "1",
  });

  const [errors, setErrors] = useState({
    location: false,
    destination: false,
    departure: false,
    returnDate: false,
  });

  const handleChange = (field: keyof FormState, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const newErrors = {
      location: form.location.trim() === "",
      destination: form.destination.trim() === "",
      departure: form.departure.trim() === "",
      returnDate: tripType !== "one" && form.returnDate.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);

    const passengers = parseInt(form.passengers) || 1;

    dispatch(
      updateBookingData({
        origin: form.location,
        destination: form.destination,
        date: form.departure,
        passengers: passengers,
      })
    );

    try {
      await dispatch(
        searchFlights({
          origin: form.location,
        })
      ).unwrap();

      navigate("/flightbooking/flightselector");
    } catch (error: any) {
      let message =
        "Failed to search flights. Please check your input and try again.";

      if (error.response?.data?.message) {
        message = error.response.data.message;
      } else if (error.message) {
        message = error.message;
      }

      alert(`❌ ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img
            src="/assets/flightBooking/Rectangle 20 (2).png"
            alt="Flight Booking"
            className="w-full h-auto"
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" }, position: "relative" }}>
          <div className="w-full mx-auto bg-white p-6 rounded-2xl">
            {/* Toggle Buttons */}
            <div className="flex items-center gap-4 mb-6 overflow-auto">
              <button
                onClick={() => setTripType("round")}
                className={`flex items-center shrink-0 w-[150px] text-[14px] gap-[8px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-full transition ${
                  tripType === "round"
                    ? "bg-[#EBF5FF] text-[#1A56DB]"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <AutorenewIcon fontSize="small" />
                Round Trip
              </button>

              <button
                onClick={() => setTripType("multi")}
                className={`flex items-center shrink-0 w-[130px] text-[14px] gap-[8px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-full transition ${
                  tripType === "multi"
                    ? "bg-[#EBF5FF] text-[#1A56DB]"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <SouthEastIcon fontSize="small" />
                Multi City
              </button>

              <button
                onClick={() => setTripType("one")}
                className={`flex items-center shrink-0 w-[128px] text-[14px] gap-[8px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-full transition ${
                  tripType === "one"
                    ? "bg-[#EBF5FF] text-[#1A56DB]"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <FlightTakeoffIcon fontSize="small" />
                One Way
              </button>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 text-[18px] font-medium text-gray-700">
                  Location
                </label>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Montreal, Canada"
                  error={errors.location}
                  helperText={errors.location ? "This field is required" : ""}
                  value={form.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 text-[18px] font-medium text-gray-700">
                  Destination
                </label>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Tokyo, Japan"
                  error={errors.destination}
                  helperText={errors.destination ? "This field is required" : ""}
                  value={form.destination}
                  onChange={(e) => handleChange("destination", e.target.value)}
                />
              </div>

              <Stack sx={{ flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
                <div className="flex-1">
                  <label className="block mb-1 text-[18px] font-medium text-gray-700">
                    Departure
                  </label>
                  <TextField
                    fullWidth
                    size="small"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    error={errors.departure}
                    helperText={errors.departure ? "Required" : ""}
                    value={form.departure}
                    onChange={(e) => handleChange("departure", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[18px] font-medium text-gray-700">
                    Return
                  </label>
                  <TextField
                    fullWidth
                    size="small"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    disabled={tripType === "one"}
                    error={errors.returnDate}
                    helperText={
                      tripType !== "one" && errors.returnDate ? "Required" : ""
                    }
                    value={form.returnDate}
                    onChange={(e) => handleChange("returnDate", e.target.value)}
                  />
                </div>
              </Stack>

              <div>
                <label className="block mb-1 text-[18px] font-medium text-gray-700">
                  Passenger
                </label>
                <Autocomplete
                  options={["1", "2", "3", "4"]}
                  value={form.passengers}
                  onChange={(_, value) =>
                    handleChange("passengers", value || "1")
                  }
                  renderInput={(params) => (
                    <TextField {...params} size="small" />
                  )}
                />
              </div>

              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#1E429F",
                  fontSize: "20px",
                  fontWeight: "600",
                  padding: "8px 16px",
                  marginTop: "20px",
                  marginBottom: { md: "0px", xs: "70px" },
                  textTransform: "none",
                }}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={26} sx={{ color: "white" }} />
                ) : (
                  "Search Flight"
                )}
              </Button>
            </div>
          </div>
        </Box>
      </Stack>
    </Container>
  );
}
