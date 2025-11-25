import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import Back from "../../components/back";
import { useNavigate } from "react-router-dom";
type SeatStatus = "available" | "selected" | "unavailable";
type SeatsMap = Record<number, SeatStatus>;

export default function SeatSelector() {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(6);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedSeat === null) {
      alert("Please select a seat before continuing.");
      return;
    }
    navigate("/flightbooking/flightselector/seatselector/boardingpass");
  };
  const [seats, setSeats] = useState<SeatsMap>(() => {
    const map: SeatsMap = {};
    for (let i = 1; i <= 30; i++) map[i] = "unavailable";

    map[4] = "available";
    map[8] = "available";
    map[9] = "available";
    map[10] = "available";
    map[16] = "available";
    map[17] = "available";
    map[20] = "available";
    map[24] = "available";
    map[26] = "available";
    map[29] = "available";
    map[28] = "available";
    map[6] = "selected";
    return map;
  });

  const ticketPrice = 150;
  const totalPrice = selectedSeat ? ticketPrice : 0;

  const handleSelectSeat = (seatNumber: number) => {
    if (seats[seatNumber] === "unavailable") return;

    setSeats((prev) => {
      const updated = { ...prev };

      Object.keys(updated).forEach((k) => {
        if (updated[+k] === "selected") updated[+k] = "available";
      });

      updated[seatNumber] = "selected";
      return updated;
    });

    setSelectedSeat(seatNumber);
  };

  const renderSeatButton = (num: number) => {
    const status = seats[num];
    const isUnavailable = status === "unavailable";
    const isSelected = status === "selected";

    return (
      <Button
        key={num}
        onClick={() => handleSelectSeat(num)}
        disabled={isUnavailable}
        sx={{
          width: { xs: "38px", md: "50px" },
          height: { xs: "38px", md: "50px" },
          fontSize: { xs: "12px", md: "18px" },
          fontWeight: 400,
          bgcolor: isUnavailable
            ? "grey.100"
            : isSelected
            ? "#03D947"
            : "#1E429F",
          color: isUnavailable ? "black" : isSelected ? "black" : "white",
          borderRadius: 1.5,
          textTransform: "none",
          minWidth: "auto",
        }}
      >
        {num}
      </Button>
    );
  };

  return (
    <Container>
      <Back />
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
        }}
      >
        {/* image */}
        <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
          <img
            src="/assets/flightBooking/Rectangle 20 (2).png"
            alt="Airplane"
            className="w-[608px]"
          />
        </Box>

        {/* right content */}
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

          {/* legend */}
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
                Un available
              </Typography>
            </Stack>
          </Stack>

          {/* seats layout */}
          {/* seats layout - ROW-BY-ROW layout with proper spacing */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {[...Array(6)].map((_, rowIndex) => {
              const rowStart = rowIndex * 5 + 1;
              const leftSeats = [rowStart, rowStart + 1]; // 2 seats on left
              const rightSeats = [rowStart + 2, rowStart + 3, rowStart + 4]; // 3 seats on right

              return (
                <Stack
                  key={rowIndex}
                  direction="row"
                  spacing={3} // 👈 هذا يتحكم في المسافة بين الجانبين (اليسار واليمين)
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ width: "100%" }}
                >
                  {/* Left side: 2 seats */}
                  <Stack direction="row" spacing={2}>
                    {" "}
                    {/* 👈 المسافة بين المقاعد داخل الطرف */}
                    {leftSeats.map((num) => renderSeatButton(num))}
                  </Stack>

                  {/* Right side: 3 seats */}
                  <Stack direction="row" spacing={2}>
                    {" "}
                    {/* 👈 نفس المسافة هنا */}
                    {rightSeats.map((num) => renderSeatButton(num))}
                  </Stack>
                </Stack>
              );
            })}
          </Box>

          {/* SUMMARY */}
          <Divider className="my-6" />
          <Box sx={{ width: "100%" }}>
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
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
              direction={"row"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "21px" }}>
                Total Price
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: "26px", color: "#1E429F" }}
              >
                ${totalPrice.toFixed(2)}
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "21px" }}>
                your Seat
              </Typography>

              <Typography
                sx={{ fontWeight: 600, fontSize: "26px", color: "#1E429F" }}
              >
                {selectedSeat ?? "-"}
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
              marginBottom:{xs:"80px !important",md:"0px"},
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
