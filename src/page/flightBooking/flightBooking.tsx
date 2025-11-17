import { Box, Container, Stack, Button} from "@mui/material";
import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SouthEastIcon from "@mui/icons-material/SouthEast";
export default function FlightBooking() {
  const [tripType, setTripType] = useState("round");
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
          <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-2xl ">
            {/* Toggle Buttons */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setTripType("round")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full  transition
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full  transition
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full  transition
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
                  placeholder="Montreal, Canada"
                  size="small"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block mb-1 text-[18px] font-medium text-gray-700">
                  Destination
                </label>
                <TextField fullWidth placeholder="Tokyo, Japan" size="small" />
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
                  renderInput={(params) => (
                    <TextField {...params} size="small" />
                  )}
                />
              </div>

              {/* Button */}
              <Button
              variant="contained"
              fullWidth
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
