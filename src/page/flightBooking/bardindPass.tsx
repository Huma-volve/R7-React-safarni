import {
  Box,
  Typography,
  Divider,
  Button,
  Avatar,
  Container,
  Stack,
  Card,
} from "@mui/material";
import { Flight } from "@mui/icons-material";
import Back from "../../components/back";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export default function BoardingPass() {
  // ✅ جلب كل بيانات الحجز من Redux (بدون early return)
  const bookingData = useSelector(
    (state: RootState) => state.flight.bookingData
  );
  console.log("bookingData");
  console.log(bookingData);
  const selectedFlight = bookingData?.selectedFlight;
  const selectedSeat = bookingData?.selectedSeat;
  const passengerInfo = bookingData?.passengerInfo;
  console.log("bookingData: ", bookingData);
  // ✅ جلب بيانات المستخدم من localStorage (مؤقت حتى ندمج passengerInfo)
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (e) {
        console.error("Invalid user data in localStorage");
      }
    }
  }, []);

  // ✅ حساب العمر من تاريخ الميلاد
  const getAge = (birthDate: string): number => {
    if (!birthDate || birthDate.startsWith("0001-01-01")) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  // ✅ تنسيق الوقت
  const formatTime = (dateStr: string | undefined): string => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ✅ تنسيق التاريخ
  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ دمج بيانات الراكب من Redux أو localStorage
  const passengerName = passengerInfo?.name || user?.data?.fullName || "—";
  const passengerAge = passengerInfo?.age
    ? `${passengerInfo.age} years, ${passengerInfo.gender || "—"}`
    : user?.data?.birthDate
    ? `${getAge(user.data.birthDate)===0?"-":getAge(user.data.birthDate)} years, male`
    : "—";
  const passengerImage =
    user?.data?.imgUrl || "/assets/barding/Avatar Place holder.png";

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
                marginBottom: { xs: "70px !important", md: "0" },
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
