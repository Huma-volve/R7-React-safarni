import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Divider,
  Stack,
  CircularProgress,
} from "@mui/material";
import Back from "../../components/back";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import {
  fetchSeats,
  updateBookingData,
  clearFlightError,
} from "../../store/flight/flightSlice";

type SeatStatus = "available" | "selected" | "unavailable";
const DEFAULT_SEATS = Array.from({ length: 30 }, (_, index) => {
  const row = Math.floor(index / 6) + 1;
  const seatLetter = ["A", "B", "C", "D", "E", "F"][index % 6];

  return {
    seat_number: `${seatLetter}${row}`,
    is_available: true,
    price: (50 + row * 10).toString(),
  };
});

export default function SeatSelector() {
  const { flightId } = useParams<{ flightId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(clearFlightError());
  }, [dispatch]);

  const { apiSeats, loading, error } = useSelector(
    (state: RootState) => state.flight
  );
  const useFallbackSeats = error?.includes("could not be found");

  const seatsToUse = useFallbackSeats ? DEFAULT_SEATS : apiSeats;

  const [selectedSeatNumber, setSelectedSeatNumber] = useState<string | null>(
    null
  );
  const [seatMap, setSeatMap] = useState<Record<string, SeatStatus>>({});

  useEffect(() => {
    if (flightId) {
      dispatch(fetchSeats(flightId));
    }
  }, [dispatch, flightId]);

  useEffect(() => {
    const map: Record<string, SeatStatus> = {};
    seatsToUse.forEach((seat) => {
      map[seat.seat_number] = seat.is_available ? "available" : "unavailable";
    });
    setSeatMap(map);
  }, [seatsToUse]);

  const handleContinue = () => {
    if (!selectedSeatNumber) {
      alert("Please select a seat before continuing.");
      return;
    }
    dispatch(
      updateBookingData({
        selectedSeat: selectedSeatNumber,
      })
    );
    navigate("/flightbooking/flightselector/seatselector/:id/boardingpass");
  };

  const handleSelectSeat = (seatNumber: string) => {
    if (seatMap[seatNumber] !== "available") return;

    const updatedMap = { ...seatMap };
    Object.keys(updatedMap).forEach((key) => {
      if (updatedMap[key] === "selected") {
        updatedMap[key] = "available";
      }
    });
    updatedMap[seatNumber] = "selected";
    setSeatMap(updatedMap);
    setSelectedSeatNumber(seatNumber);
  };

  const renderSeatButton = (seatNumber: string) => {
    const status = seatMap[seatNumber] || "unavailable";
    const isUnavailable = status === "unavailable";
    const isSelected = status === "selected";

    return (
      <Button
        key={seatNumber}
        onClick={() => handleSelectSeat(seatNumber)}
        disabled={isUnavailable}
        sx={{
          width: { xs: "27px", md: "50px" },
          height: { xs: "27px", md: "50px" },
          fontSize: { xs: "12px", md: "18px" },
          fontWeight: 400,
          bgcolor: isUnavailable
            ? "grey.100"
            : isSelected
            ? "success.main"
            : "primary.main",
          color: isUnavailable ? "black" : isSelected ? "black" : "white",
          borderRadius: 1.5,
          textTransform: "none",
          minWidth: "auto",
        }}
      >
        {seatNumber}
      </Button>
    );
  };

  const renderSeatLayout = () => {
    const allSeats = Object.keys(seatMap);
    if (allSeats.length === 0) return null;

    const rowsMap: Record<string, string[]> = {};
    allSeats.forEach((seatNum) => {
      const row = seatNum.replace(/\D/g, ""); // "A1" → "1"
      if (!rowsMap[row]) rowsMap[row] = [];
      rowsMap[row].push(seatNum);
    });

    const sortedRows = Object.keys(rowsMap)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .slice(0, 6);

    return sortedRows.map((row) => {
      const seatsInRow = rowsMap[row].sort();
      const left = seatsInRow.filter((s) => ["A", "B"].includes(s[0]));
      const right = seatsInRow.filter((s) =>
        ["C", "D", "E", "F"].includes(s[0])
      );

      return (
        <Stack
          key={row}
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" spacing={2}>
            {left.map(renderSeatButton)}
          </Stack>
          <Stack direction="row" spacing={2}>
            {right.map(renderSeatButton)}
          </Stack>
        </Stack>
      );
    });
  };

  const selectedSeatData = seatsToUse.find(
    (s) => s.seat_number === selectedSeatNumber
  );
  const ticketPrice = selectedSeatData ? parseFloat(selectedSeatData.price) : 0;

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          flexDirection: "column",
        }}
      >
        <CircularProgress size={60} thickness={4} color="primary" />
        <Typography sx={{ fontSize: "18px", marginTop: "16px" }}>
          Loading seats...
        </Typography>
      </Box>
    );
  }

  if (!error?.includes("could not be found")) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          flexDirection: "column",
          color: "red",
        }}
      >
        <Typography sx={{ fontSize: "18px" }}>{error}</Typography>
      </Box>
    );
  }

  if (!seatsToUse || seatsToUse.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "18px" }}>No seats available.</Typography>
      </Box>
    );
  }

  return (
    <Container>
      <Back />
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
        }}
      >
        <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
          <img
            src="/assets/flightBooking/Rectangle 20 (2).png"
            alt="Airplane"
            className="w-[608px]"
          />
        </Box>

        <Stack
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography sx={{ fontSize: "26px", fontWeight: 500 }} mb={2}>
            Choose seat
          </Typography>

          {/* Legend */}
          <Stack direction="row" spacing={3} mb={4}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                }}
              />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "20px" }, fontWeight: 400 }}
              >
                Available
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "success.main",
                }}
              />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "20px" }, fontWeight: 400 }}
              >
                Selected
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "grey.300",
                }}
              />
              <Typography
                sx={{ fontSize: { xs: "11px", md: "20px" }, fontWeight: 400 }}
              >
                Unavailable
              </Typography>
            </Stack>
          </Stack>

          {/* Seats Layout */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {renderSeatLayout()}
          </Box>

          {/* Summary */}
          <Divider className="my-6" />
          <Box sx={{ width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: 400, fontSize: "21px" }}>
                Ticket price
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "26px", color: "#1E429F" }}
              >
                ${ticketPrice.toFixed(2)}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: 400, fontSize: "21px" }}>
                Total Price
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "26px", color: "#1E429F" }}
              >
                ${ticketPrice.toFixed(2)}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: 400, fontSize: "21px" }}>
                Your Seat
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "26px", color: "#1E429F" }}
              >
                {selectedSeatNumber ?? "-"}
              </Typography>
            </Stack>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={handleContinue}
            sx={{
              backgroundColor: "#1E429F",
              fontSize: "20px",
              fontWeight: "600",
              padding: "8px 16px",
              marginTop: "20px",
              marginBottom: { xs: "80px !important", md: "0px" },
              textTransform: "none",
            }}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
