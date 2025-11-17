import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import PayPal from "./paypal";
import MasterCard from "./masterCard";

export default function PaymentPage() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <Container>
      {/* return to home */}
      <Box
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
        onClick={() => navigate(-1)}
      >
        <div className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center">
          <NavigateBeforeIcon className="text-[24px]" />
        </div>
      </Box>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
        }}
      >
        {/**Left Side */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img src="/assets/destination/paymentPage/Rectangle 20.png" alt="" />
        </Box>
        {/**Right Side */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, position: "relative" }}>
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "26px",
              fontWeight: "500",
            }}
          >
            Payment Methed
          </Typography>
          <Typography
            sx={{ marginBottom: "20px", fontSize: "22px", fontWeight: "500" }}
          >
            Add You Payment Methed
          </Typography>
          <Stack direction="row" spacing={2}>
            <div
              className={`rounded-full w-[146px] pr-[20px] pl-[20px] flex items-center gap-2 cursor-pointer ${content === "PayPal" ? "bg-[#EBF5FF] " : "bg-gray-100 "
                }`}
              onClick={() => setContent("PayPal")}
            >
              <img
                src="/assets/destination/paymentPage/logos_paypal (1).png"
                alt=""
                className="w-[20px] h-[24px]"
              />
              <Typography
                sx={{
                  color: "#4B5563",
                  fontSize: { sx: "20px", md: "24px" },
                  fontWeight: "500",
                }}
              >
                Paypal
              </Typography>
            </div>
            <div
              className={` rounded-full w-[207px] p-[5px]  flex items-center gap-2 justify-center cursor-pointer ${content === "MasterCard"
                ? "bg-[#EBF5FF] " : "bg-gray-100 "
                }`}
              onClick={() => setContent("MasterCard")}
            >
              <img
                src="/assets/destination/paymentPage/Mastercard.png"
                alt=""
                className="w-[24px] h-[15px]"
              />
              <Typography
                sx={{
                  color: "#4B5563",
                  fontSize: { sx: "20px", md: "24px" },
                  fontWeight: "500",
                }}
              >
                MasterCard
              </Typography>
            </div>
            <div
              className={` rounded-full w-[128px] flex items-center gap-2 justify-center cursor-pointer ${content === "Visa"
                ? "bg-[#EBF5FF] " : "bg-gray-100 "
                }`}
              onClick={() => setContent("Visa")}
            >
              <img
                src="/assets/destination/paymentPage/Visa.png"
                alt=""
                className="w-[30px] h-[10px]"
              />
              <Typography
                sx={{
                  color: "#4B5563",
                  fontSize: { sx: "20px", md: "24px" },
                  fontWeight: "500",
                }}
              >
                Visa
              </Typography>
            </div>
          </Stack>
          {content === "" ? (
            <Stack
              direction="column"
              spacing={2}
              sx={{
                position: { xs: "static", md: "absolute" },
                bottom: "20px",
                width: "100%",
              }}
            >
              <Button sx={{ color: "black", textTransform: "none" }}>
                <Typography sx={{ marginRight: "10px" }}>Add Card</Typography>
                <AddCircleOutline />
              </Button>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={() => setContent("PayPal")}
              >
                continue
              </Button>
            </Stack>
          ) : content === "PayPal" ? (
            <PayPal />
          ) : (
            <MasterCard />
          )}
        </Box>
      </Stack>
    </Container>
  );
}
