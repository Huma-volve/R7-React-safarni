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
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { updateBookingData } from "../../store/flight/flightSlice";
import type { AppDispatch } from "../../store/store";
export default function FlightSelector() {
  const { bookingData } = useSelector((state: RootState) => state.flight);
  {
    bookingData?.date || "Select date";
  }
  const { flights, loading, error } = useSelector(
    (state: RootState) => state.flight
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log("Flights from store:", flights);
  const navigate = useNavigate();
  const handleCardClick = (flight: any) => {
    dispatch(
      updateBookingData({
        selectedFlight: flight,
      })
    );
    navigate(
      `/flightbooking/flightselector/seatselector/${flight.id.toString()}`
    );
  };

  // علشان نتعامل مع الـ response المختلف
  const displayFlights = flights?.data?.flights?.data || [];
  console.log("displayFlights: ", displayFlights);

  return (
    <Container>
      <Back />
      {/* Top Date Boxes */}
      <Stack
        direction={"row"}
        spacing={3}
        sx={{ marginBottom: "30px", justifyContent: "space-between" }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: { xs: "47%", md: "595px" },
            height: { xs: "44px", md: "80px" },
            padding: "10px 16px",
            fontSize: { xs: "9px", sm: "13px", md: "20px" },
            fontWeight: "400",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.115)",
            borderRadius: "10px",
          }}
        >
          <CalendarMonthOutlinedIcon
            sx={{
              marginRight: "10px",
              fontSize: { xs: "11px", sm: "13px", md: "20px" },
            }}
          />
          {/* {bookingData?.date || "Select date"} */}
          {displayFlights[0]?.arrival_time
            ? new Date(displayFlights[0].arrival_time).toLocaleDateString(
                "en-CA"
              ) // بيرجع "2025-11-27"
            : "2025-11-27"}
        </Stack>

        <Stack
          direction={"row"}
          sx={{
            width: { xs: "47%", md: "595px" },
            height: { xs: "44px", md: "80px" },
            padding: "10px 16px",
            fontSize: { xs: "9px", sm: "13px", md: "20px" },
            fontWeight: "400",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.115)",
            borderRadius: "10px",
          }}
        >
          <PersonOutline
            sx={{
              marginRight: "10px",
              fontSize: { xs: "11px", sm: "13px", md: "20px" },
            }}
          />
          {displayFlights[0]?.departure_time
            ? new Date(displayFlights[0].departure_time).toLocaleDateString(
                "en-CA"
              ) // بيرجع "2025-11-27"
            : "2025-11-27"}
        </Stack>
      </Stack>

      {/* Loading State */}
      {loading && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography sx={{ fontSize: "20px" }}>
            جاري تحميل الرحلات...
          </Typography>
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Box sx={{ textAlign: "center", py: 4, color: "red" }}>
          <Typography sx={{ fontSize: "20px" }}>خطأ: {error}</Typography>
        </Box>
      )}

      {/* Flight Cards */}
      <Stack
        direction={"row"}
        spacing={3}
        sx={{
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "10px",
          marginBottom: { xs: "57px", md: "0" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "608px" } }}>
          {displayFlights.length === 0 && !loading ? (
            <Typography sx={{ textAlign: "center", py: 4 }}>
              لا توجد رحلات متاحة
            </Typography>
          ) : (
            displayFlights.map((flight: any) => (
              <Card
                key={flight.id}
                sx={{
                  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.11115)",
                  borderRadius: "30px",
                  padding: "20px",
                  position: "relative",
                  marginBottom: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  },
                }}
                onClick={() => handleCardClick(flight)}
              >
                <CardContent>
                  {/* Times Row */}
                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* Departure */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        {flight.departure_time
                          ? new Date(flight.departure_time).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : "08:00 AM"}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                          color: "#6B7280",
                        }}
                      >
                        {flight.origin?.airport_code || "CAI"}
                      </Typography>
                    </Box>

                    {/* Airplane Icon */}
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
                        {flight.destination?.airport_code || "JED"}
                      </Typography>
                    </Stack>

                    {/* Arrival */}
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        {flight.arrival_time
                          ? new Date(flight.arrival_time).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : "12:00 PM"}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                          color: "#6B7280",
                        }}
                      >
                        {flight.destination?.airport_code || "JED"}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Bottom Row */}
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
                        {flight.duration_minutes
                          ? `${Math.floor(flight.duration_minutes / 60)}h ${
                              flight.duration_minutes % 60
                            }m`
                          : "Direct Flight"}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        {flight.carrier?.carrier_name || "EgyptAir"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        ${"250"}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))
          )}
        </Box>

        {/* Divider for mobile */}
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
          {displayFlights.length === 0 && !loading ? (
            <Typography sx={{ textAlign: "center", py: 4 }}>
              لا توجد رحلات متاحة
            </Typography>
          ) : (
            displayFlights.map((flight: any) => (
              <Card
                key={flight.id}
                sx={{
                  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.11115)",
                  borderRadius: "30px",
                  padding: "20px",
                  position: "relative",
                  marginBottom: "20px",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  },
                }}
                onClick={() => handleCardClick(flight.id.toString())}
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
                        {flight.departure_time
                          ? new Date(flight.departure_time).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : "08:00 AM"}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                          color: "#6B7280",
                        }}
                      >
                        {flight.origin?.airport_code || "CAI"}
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
                        {flight.destination?.airport_code || "JED"}
                      </Typography>
                    </Stack>

                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        {flight.arrival_time
                          ? new Date(flight.arrival_time).toLocaleTimeString(
                              [],
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : "12:00 PM"}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                          color: "#6B7280",
                        }}
                      >
                        {flight.destination?.airport_code || "JED"}
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
                        {flight.duration_minutes
                          ? `${Math.floor(flight.duration_minutes / 60)}h ${
                              flight.duration_minutes % 60
                            }m`
                          : "Direct Flight"}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        {flight.carrier?.carrier_name || "EgyptAir"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "23px" },
                          fontWeight: "500",
                        }}
                      >
                        ${"250"}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </Stack>
    </Container>
  );
}
