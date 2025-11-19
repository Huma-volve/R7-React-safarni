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
export default function BoardingPass() {
  return (
    <Container>
      <Back />
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
        }}
      >
        {/* LEFT IMAGE */}
        <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
          <img src="/assets/flightBooking/Rectangle 20 (2).png" alt="" />
        </Box>

        {/* RIGHT BOARDING PASS */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, position: "relative" }}>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "26px" },
              fontWeight: "500",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Barding pass
          </Typography>

          {/* CARD */}
          <Card elevation={3} className="rounded-3xl px-6 pt-4 pb-6 relative">
            {/* TOP BAR */}
            <img
              src="/assets/barding/Rectangle 292.png"
              alt=""
              className="w-full absolute top-[-5px] left-0"
            />

            {/* HEADER */}
            <Box className="flex justify-between items-end mt-4">
              <Box className="flex justify-between gap-2 items-center flex-col">
                <img
                  src="/assets/barding/image 13 (1).png"
                  alt="Air Canada"
                  className="w-6"
                />
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "15px" },
                    fontWeight: "500",
                  }}
                >
                  Air Canada
                </Typography>
              </Box>

              <Typography
                sx={{ fontSize: { xs: "13px", md: "20px" }, fontWeight: "400" }}
              >
                December 16th, 2022
              </Typography>
            </Box>

            {/* FLIGHT TIME */}
            <Box className="flex justify-between items-center my-4 px-2">
              <div className="text-center">
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "21px" },
                    fontWeight: "500",
                  }}
                >
                  07h05
                </Typography>
                <Typography className="text-gray-500 text-[13px] md:text-[15px] font-[600]">
                  YUL
                </Typography>
              </div>

              <div className="flex flex-col items-center">
                <Flight sx={{ transform: "rotate(90deg)", fontSize: "15px" }} />
                <Typography className="text-gray-400 text-[11px] md:text-[13px] font-[400]">
                  13h00
                </Typography>
              </div>

              <div className="text-center">
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "21px" },
                    fontWeight: "500",
                  }}
                >
                  20h05
                </Typography>
                <Typography className="text-gray-500 text-[13px] md:text-[15px] font-[600]">
                  NRT
                </Typography>
              </div>
            </Box>
            <Divider />
            {/* DETAILS */}
            <Box className="grid grid-cols-4 gap-4 text-center my-6">
              <div>
                <Typography className="text-gray-500 text-[13px] md:text-[15px]">
                  8
                </Typography>
                <Typography className="font-bold text-[13px] md:text-[15px]">
                  Gate
                </Typography>
              </div>
              <div>
                <Typography className="text-gray-500 text-[13px] md:text-[15px]">
                  6
                </Typography>
                <Typography className="font-bold text-[13px] md:text-[15px]">
                  Seat
                </Typography>
              </div>
              <div>
                <Typography className="text-gray-500 text-[13px] md:text-[15px]">
                  3
                </Typography>
                <Typography className="font-bold text-[13px] md:text-[15px]">
                  Terminal
                </Typography>
              </div>
              <div>
                <Typography className="text-gray-500 text-[13px] md:text-[15px]">
                  AC006
                </Typography>
                <Typography className="font-bold text-[13px] md:text-[15px]">
                  Flight
                </Typography>
              </div>
            </Box>

            <Divider />

            {/* PASSENGER INFO */}
            <Box className="flex justify-between items-center py-4">
              <Box className="flex items-center gap-3">
                <Avatar
                  src="/assets/barding/Avatar Place holder.png"
                  alt="Passenger"
                  sx={{ width: 45, height: 45 }}
                />
                <Box>
                  <Typography className="font-semibold text-[15px] md:text-[18px]">
                    Catherine Dion
                  </Typography>
                  <Typography className="text-gray-500 text-[13px] md:text-[15px]">
                    24 years, Female
                  </Typography>
                </Box>
              </Box>

              <Box className="flex items-center gap-2">
                <img
                  src="/assets/barding/Sofa.png"
                  alt="Seat"
                  className="w-6"
                />
                <Typography className="font-semibold text-[15px] md:text-[18px]">
                  29A
                </Typography>
              </Box>
            </Box>

            <Divider className="my-4" />

            {/* QR CODE */}
            <Box className="w-full flex justify-center py-4">
              <img src="/assets/barding/Scan.png" alt="QR Code" />
            </Box>
          </Card>

          {/* CHECKOUT BUTTON */}
          <Link to="/paymentpage" className="w-full">
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
              Check Out
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
