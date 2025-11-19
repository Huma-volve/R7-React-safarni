import { Box, Container, Stack, Button } from "@mui/material";
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { useNavigate } from "react-router-dom";

interface FormState {
  location: string;
  destination: string;
  departure: string;
  returnDate: string;
  passengers: string;
}

export default function FlightBooking() {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("round");

  const [form, setForm] = useState<FormState>({
    location: "",
    destination: "",
    departure: "",
    returnDate: "",
    passengers: "1 Passenger",
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
      returnDate: tripType !== "one" ? form.returnDate.trim() === "" : false,
    };
    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    navigate("/flightbooking/flightselector");
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
          <img src="/assets/flightBooking/Rectangle 20 (2).png" alt="" />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" }, position: "relative" }}>
          <div className="w-full mx-auto bg-white p-6 rounded-2xl">
            {/* Toggle Buttons */}
            <div className="flex items-center gap-4 mb-6 overflow-auto">
              <button
                onClick={() => setTripType("round")}
                className={`flex items-center shrink-0 w-[150px] text-[14px] gap-[8px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-full transition
                    ${
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
                className={`flex items-center shrink-0 w-[130px] text-[14px] gap-[8px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-full transition
                    ${
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
                className={`flex items-center shrink-0 w-[128px] text-[14px] gap-[8px] pt-[8px] pb-[8px] pl-[16px] pr-[16px] rounded-full transition
                    ${
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
              {/* Location */}
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
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block mb-1 text-[18px] font-medium text-gray-700">
                  Destination
                </label>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Tokyo, Japan"
                  error={errors.destination}
                  helperText={
                    errors.destination ? "This field is required" : ""
                  }
                  onChange={(e) => handleChange("destination", e.target.value)}
                />
              </div>

              {/* Dates */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 text-[18px] font-medium text-gray-700">
                    Departure
                  </label>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    placeholder="Dec 16th, 2025"
                    error={errors.departure}
                    helperText={errors.departure ? "Required" : ""}
                    onChange={(e) =>
                      handleChange("departure", e.target.value)
                    }
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1 text-[18px] font-medium text-gray-700">
                    Return
                  </label>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    placeholder="Jan 6th, 2025"
                    disabled={tripType === "one"}
                    error={errors.returnDate}
                    helperText={
                      tripType !== "one" && errors.returnDate
                        ? "Required"
                        : ""
                    }
                    onChange={(e) =>
                      handleChange("returnDate", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Passenger */}
              <div>
                <label className="block mb-1 text-[18px] font-medium text-gray-700">
                  Passenger
                </label>
                <Autocomplete
                  options={["1 Passenger", "2 Passengers", "3 Passengers"]}
                  defaultValue="1 Passenger"
                  onChange={(_, value) =>
                    handleChange("passengers", value || "1 Passenger")
                  }
                  renderInput={(params) => (
                    <TextField {...params} size="small" />
                  )}
                />
              </div>

              {/* Button */}
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
                  textTransform: "none",
                }}
              >
                Search Flight
              </Button>
            </div>
          </div>
        </Box>
      </Stack>
    </Container>
  );
}
