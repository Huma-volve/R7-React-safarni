import { PersonOutline } from "@mui/icons-material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { useNavigate } from "react-router-dom";
import Back from "../../components/back";

export default function FlightSelector() {
  const navigate = useNavigate();

  const flights = [
    {
      id: 1,
      departureTime: "7:05 AM",
      arrivalTime: "8:55 PM",
      departureAirport: "YUL",
      arrivalAirport: "18:55",
      layover: "1 layover: YYZ (3:55)",
      airline: "Scoot",
      price: 1300,
    },
    {
      id: 2,
      departureTime: "9:05 AM",
      arrivalTime: "4:05 PM",
      departureAirport: "YUL",
      arrivalAirport: "18:55",
      layover: "1 layover: YYZ (3:55)",
      airline: "Scoot",
      price: 1400,
    },
    {
      id: 3,
      departureTime: "9:05 AM",
      arrivalTime: "4:55 PM",
      departureAirport: "YUL",
      arrivalAirport: "18:55",
      layover: "1 layover: YYZ (3:55)",
      airline: "Scoot",
      price: 1300,
    },
  ];

  const handleCardClick = () => {
    // يمكن إرسال flightId كـ state إذا حابب تعرف أي رحلة اختار المستخدم
    navigate("/flightbooking/flightselector/seatselector");
  };

  return (
    <Container>
      <Back />
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ marginBottom: "30px", justifyContent: "space-between" }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: { xs: "47%", md: "595px" },
            height: { xs: "44px", md: "80px" },
            padding: "10px 16px",
            fontSize: { xs: "11px", sm: "13px", md: "20px" },
            fontWeight: "400",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.115)",
            borderRadius: "10px",
          }}
        >
          <CalendarMonthOutlinedIcon sx={{ marginRight: "10px" }} />
          Dec 16th, 2025
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            width: { xs: "47%", md: "595px" },
            height: { xs: "44px", md: "80px" },
            padding: "10px 16px",
            fontSize: { xs: "11px", sm: "13px", md: "20px" },
            fontWeight: "400",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.115)",
            borderRadius: "10px",
          }}
        >
          <PersonOutline sx={{ marginRight: "10px" }} />
          Jan 6th, 2025
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={3}
        sx={{
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "608px" } }}>
          {flights.map((flight) => (
            <Card
              key={flight.id}
              sx={{
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.11115)",
                borderRadius: "30px",
                padding: "20px",
                position: "relative",
                marginBottom: "20px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                },
              }}
              onClick={() => handleCardClick()}
            >
              <CardContent>
                <Stack
                  direction={"row"}
                  spacing={2}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      {flight.departureTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                        color: "#6B7280",
                      }}
                    >
                      {flight.departureAirport}
                    </Typography>
                  </Box>

                  <Stack
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <AirplanemodeActiveIcon
                      sx={{ transform: "rotate(90deg)" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "18px" },
                        fontWeight: "400",
                      }}
                    >
                      {flight.arrivalAirport}
                    </Typography>
                  </Stack>

                  <Box sx={{ textAlign: "right" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      {flight.arrivalTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                        color: "#6B7280",
                      }}
                    >
                      {flight.departureAirport}
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction={"row"}
                  spacing={2}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "10px", md: "16px" },
                        fontWeight: "400",
                        color: "#6B7280",
                      }}
                    >
                      {flight.layover}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      {flight.airline}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      $ {flight.price}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
        <div className="flex justify-center items-center">
          <Divider
            sx={{
              display: { xs: "block", md: "none" },
              width: "134px",
              height: "5px",
              backgroundColor: "black",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
        <Box sx={{ width: { xs: "100%", md: "608px" }, ml: 0 }}>
          {flights.map((flight) => (
            <Card
              key={flight.id + "return"}
              sx={{
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.11115)",
                borderRadius: "30px",
                padding: "20px",
                position: "relative",
                marginBottom: "20px",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                },
              }}
              onClick={() => handleCardClick()}
            >
              <CardContent>
                <Stack
                  direction="row"
                  spacing={0} // تمنع أي margin تلقائي بين العناصر
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      {flight.departureTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                        color: "#6B7280",
                      }}
                    >
                      {flight.departureAirport}
                    </Typography>
                  </Box>

                  <Stack
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <AirplanemodeActiveIcon
                      sx={{ transform: "rotate(90deg)" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "13px", md: "18px" },
                        fontWeight: "400",
                      }}
                    >
                      {flight.arrivalAirport}
                    </Typography>
                  </Stack>

                  <Box sx={{ textAlign: "right" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      {flight.arrivalTime}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                        color: "#6B7280",
                      }}
                    >
                      {flight.departureAirport}
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "10px", md: "16px" },
                        fontWeight: "400",
                        color: "#6B7280",
                      }}
                    >
                      {flight.layover}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      {flight.airline}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", md: "23px" },
                        fontWeight: "500",
                      }}
                    >
                      $ {flight.price}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
