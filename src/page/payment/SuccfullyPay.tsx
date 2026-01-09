import { Stack, Box, Container, Typography, Button } from "@mui/material";
//import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link } from "react-router-dom";
export default function SuccfullyPay() {
  return (
    <Container>
      <Link to="/" className="pt-[20px] pb-[20px] ">
        <div className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center">
          <NavigateBeforeIcon className="text-[24px]" />
        </div>
      </Link>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
          justifyContent: "center",
          alignItems: "center",
          marginTop:"20px"
        }}
      >
        {/**Left Side */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img
            src="/assets/destination/paymentPage/Rectangle 20 (1).png"
            alt=""
          />
        </Box>
        {/**Right Side */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src="/assets/destination/paymentPage/check-circle.png"
            alt=""
            className="mx-auto mt-[20px]"
          />
          <Typography
            sx={{ fontSize: "28px", fontWeight: "500", marginTop: "30px" }}
          >
            Payment Succeful!
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              marginTop: "20px",
              color: "#6B7280",
            }}
          >
            Thank you For Your Trust
          </Typography>
          <Link to="/">
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
                color: "white",
                marginBottom: { xs: "95px", md: "0px" },
              }}
            >
              Back To Home
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
