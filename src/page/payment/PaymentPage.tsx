import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import PayPal from "./paypal";
import MasterCard from "./masterCard";
import Back from "../../components/back";
import { Link } from "react-router-dom";
export default function PaymentPage() {
  const [content, setContent] = useState("");
  return (
    <Container>
      {/* return to home */}
      <Back />
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        {/**Left Side */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "220px",sm:"500px", md: "650px" },
          }}
        >
          <img
            src="/assets/destination/paymentPage/Rectangle 20.png"
            alt=""
            className="w-full h-[100%] m-[auto] "
          />
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
          <Stack
            direction="row"
            spacing={2}
            sx={{ overflow: "auto", marginBottom: "20px" }}
          >
            <div
              className={`rounded-full xs:w-[125px] md:w-[146px] pt-[16px] pb-[16px] pr-[24px] pl-[24px] flex items-center justify-center gap-2 cursor-pointer ${
                content === "PayPal" ? "bg-[#EBF5FF] " : "bg-gray-100 "
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
                  fontSize: { sx: "14px", md: "24px" },
                  fontWeight: "500",
                }}
              >
                Paypal
              </Typography>
            </div>
            <div
              className={` rounded-full xs:w-[168px] md:w-[207px] pt-[16px] pb-[16px] pr-[24px] pl-[24px] flex items-center gap-[8px] justify-center cursor-pointer ${
                content === "MasterCard" ? "bg-[#EBF5FF] " : "bg-gray-100 "
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
                  fontSize: { sx: "14px", md: "24px" },
                  fontWeight: "500",
                }}
              >
                MasterCard
              </Typography>
            </div>
            <div
              className={` rounded-full xs:w-[117px] md:w-[128px] pt-[16px] pb-[16px] pr-[24px] pl-[24px] flex items-center gap-[8px] justify-center cursor-pointer ${
                content === "Visa" ? "bg-[#EBF5FF] " : "bg-gray-100 "
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
                  fontSize: { sx: "14px", md: "24px" },
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
                position: { xs: "static",md: "absolute" },
                bottom: "20px",
                width: "100%",
                marginBottom: { xs: "95px", md: "0" },
              }}
            >
              <Link to="/addcard" className="flex justify-center ">
                <Button sx={{ color: "black", textTransform: "none" }}>
                  <Typography sx={{ marginRight: "10px" }}>Add Card</Typography>
                  <AddCircleOutline />
                </Button>
              </Link>

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
