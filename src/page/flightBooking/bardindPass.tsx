import {
  Box,
  Typography,
  Divider,
  Button,
  Avatar,
  Container,
  Stack,
  Card,
  CircularProgress,
} from "@mui/material";
import { Flight } from "@mui/icons-material";
import Back from "../../components/back";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function BoardingPass() {
  // جلب بيانات الحجز من Redux
  const bookingData = useSelector(
    (state: RootState) => state.flight.bookingData
  );

  const selectedFlight = bookingData?.selectedFlight;
  const selectedSeat = bookingData?.selectedSeat;

  // حالة الركاب والـ user
  const [passengerInfo, setPassengerInfo] = useState({
    name: "_",
    age: "_",
    gender: "_",
  });
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const userData = JSON.parse(userStr);
        setPassengerInfo({
          name: userData.data?.fullName || "_",
          age: userData.data?.birthDate
            ? (
                new Date().getFullYear() -
                new Date(userData.data.birthDate).getFullYear()
              ).toString()
            : "_",
          gender: userData.data?.gender || "_",
        });
        setUser(userData);
      } catch {
        setPassengerInfo({ name: "_", age: "_", gender: "_" });
        setUser(null);
      }
    } else {
      setPassengerInfo({ name: "_", age: "_", gender: "_" });
      setUser(null);
    }

    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  // تنسيق الوقت
  const formatTime = (dateStr: string | undefined): string => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // تنسيق التاريخ
  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const passengerName = passengerInfo.name;
  const passengerAge =
    passengerInfo.age && passengerInfo.gender
      ? `${passengerInfo.age} years, ${passengerInfo.gender}`
      : "_ years, _";

  const passengerImage =
    user?.data?.imgUrl || "/assets/barding/Avatar Place holder.png";

  // Loader
  if (loading || !bookingData) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <CircularProgress size={60} thickness={4} color="primary" />
        <Typography sx={{ mt: 2, fontSize: "18px" }}>
          Loading boarding pass...
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth={false} disableGutters sx={{ overflow: "visible" }}>
      <Back />
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
          overflow: "visible",
        }}
      >
        {/* LEFT IMAGE */}
        <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
          <img
            src="/assets/flightBooking/Rectangle 20 (2).png"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>

        {/* RIGHT BOARDING PASS */}
        <Box sx={{ position: "relative", width: { xs: "100%", md: "50%" } }}>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "26px" },
              fontWeight: "500",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Boarding Pass
          </Typography>

          <Card
            elevation={3}
            sx={{
              margin: "auto",
              width: "90%",
              borderRadius: "24px",
              padding: "20px 20px 30px",
              position: "relative",
              overflow: "visible",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                right: "-16px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                transform: "translateY(-50%) rotate(92deg)",
                boxShadow: "0px -2px 2px rgba(0, 0, 0, 0.2) inset",
                zIndex: 10,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "-16px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                transform: "translateY(-50%) rotate(-88deg)",
                boxShadow: "0px -2px 2px rgba(0, 0, 0, 0.2) inset",
                zIndex: 10,
              },
            }}
          >
            {/* TOP BAR */}
            <img
              src="/assets/barding/Rectangle 292.png"
              alt=""
              style={{
                position: "absolute",
                top: "-6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "130%",
                zIndex: 10,
                opacity: "0.4",
              }}
            />

            {/* HEADER */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                mt: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: "500",
                  }}
                >
                  {selectedFlight?.airline || "Airline"}
                </Typography>
              </Box>

              <Typography
                sx={{ fontSize: { xs: "13px", md: "20px" }, fontWeight: "400" }}
              >
                {formatDate(bookingData?.date)}
              </Typography>
            </Box>

            {/* FLIGHT TIME */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: 4,
                px: 2,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "21px" },
                    fontWeight: "500",
                  }}
                >
                  {formatTime(selectedFlight?.departure_time)}
                </Typography>
                <Typography
                  className="text-gray-500"
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: "600",
                  }}
                >
                  {selectedFlight?.origin.airport_code || "—"}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Flight sx={{ transform: "rotate(90deg)", fontSize: "15px" }} />
                <Typography
                  className="text-gray-400"
                  sx={{
                    fontSize: { xs: "11px", md: "13px" },
                    fontWeight: "400",
                  }}
                >
                  {selectedFlight?.duration_minutes !== undefined
                    ? selectedFlight.duration_minutes / 60
                    : "—"}
                </Typography>
              </div>

              <div style={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "21px" },
                    fontWeight: "500",
                  }}
                >
                  {formatTime(selectedFlight?.arrival_time)}
                </Typography>
                <Typography
                  className="text-gray-500"
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: "600",
                  }}
                >
                  NRT
                </Typography>
              </div>
            </Box>
            <Divider />

            {/* DETAILS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
                textAlign: "center",
                my: 6,
              }}
            >
              <div>
                <Typography
                  className="text-gray-500"
                  sx={{ fontSize: { xs: "13px", md: "15px" } }}
                >
                  8
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "13px", md: "15px" },
                  }}
                >
                  Gate
                </Typography>
              </div>
              <div>
                <Typography
                  className="text-gray-500"
                  sx={{ fontSize: { xs: "13px", md: "15px" } }}
                >
                  {selectedSeat || "—"}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "13px", md: "15px" },
                  }}
                >
                  Seat
                </Typography>
              </div>
              <div>
                <Typography
                  className="text-gray-500"
                  sx={{ fontSize: { xs: "13px", md: "15px" } }}
                >
                  3
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "13px", md: "15px" },
                  }}
                >
                  Terminal
                </Typography>
              </div>
              <div>
                <Typography
                  className="text-gray-500"
                  sx={{ fontSize: { xs: "13px", md: "15px" } }}
                >
                  {selectedFlight?.id || "—"}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "13px", md: "15px" },
                  }}
                >
                  Flight
                </Typography>
              </div>
            </Box>

            <Divider />

            {/* PASSENGER INFO */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  src={passengerImage}
                  alt="Passenger"
                  sx={{ width: 45, height: 45 }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "15px", md: "18px" },
                    }}
                  >
                    {passengerName}
                  </Typography>
                  <Typography
                    className="text-gray-500"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "13px", md: "15px" },
                    }}
                  >
                    {passengerAge}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src="/assets/barding/Sofa.png"
                  alt="Seat"
                  style={{ width: 24 }}
                />
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "15px", md: "18px" },
                  }}
                >
                  {selectedSeat || "—"}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* QR CODE */}
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <img src="/assets/barding/Scan.png" alt="QR Code" />
            </Box>
          </Card>

          {/* CHECKOUT BUTTON */}
          <Link
            to="/paymentpage"
            className="w-full"
            style={{ textDecoration: "none" }}
          >
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
                marginBottom: { xs: "95px !important", md: "0" },
              }}
            >
              Check Out
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
