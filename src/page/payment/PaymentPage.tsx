import { Box, Button, Container, Stack, Typography } from "@mui/material";
<<<<<<< HEAD:src/page/payment/PaymentPage.tsx
import { useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
=======
>>>>>>> keroles:src/payment/PaymentPage.tsx
import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import PayPal from "./paypal";
import MasterCard from "./masterCard";
import Back from "../components/back";

export default function PaymentPage() {
  const [content, setContent] = useState("");
<<<<<<< HEAD:src/page/payment/PaymentPage.tsx
  const navigate = useNavigate();
=======
>>>>>>> keroles:src/payment/PaymentPage.tsx
  return (
    <Container>
      {/* return to home */}
      <Back />
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
          justifyContent:{xs:"center",md:"space-between"},
        }}
      >
        {/**Left Side */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, height: {xs:"220px",md:"auto"} }}>
          <img src="/assets/destination/paymentPage/Rectangle 20.png" alt="" className="xs:w-[343px] md:w-full h-full m-[auto]"/>
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
          <Stack direction="row" spacing={2} sx={{overflow:"auto",marginBottom:"20px"}}>
            <div
<<<<<<< HEAD:src/page/payment/PaymentPage.tsx
              className={`rounded-full w-[146px] pr-[20px] pl-[20px] flex items-center gap-2 cursor-pointer ${content === "PayPal" ? "bg-[#EBF5FF] " : "bg-gray-100 "
                }`}
=======
              className={`rounded-full xs:w-[125px] md:w-[146px] pt-[16px] pb-[16px] pr-[24px] pl-[24px] flex items-center justify-center gap-2 cursor-pointer ${
                content === "PayPal" ? "bg-[#EBF5FF] " : "bg-gray-100 "
              }`}
>>>>>>> keroles:src/payment/PaymentPage.tsx
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
<<<<<<< HEAD:src/page/payment/PaymentPage.tsx
              className={` rounded-full w-[207px] p-[5px]  flex items-center gap-2 justify-center cursor-pointer ${content === "MasterCard"
                ? "bg-[#EBF5FF] " : "bg-gray-100 "
                }`}
=======
              className={` rounded-full xs:w-[168px] md:w-[207px] pt-[16px] pb-[16px] pr-[24px] pl-[24px] flex items-center gap-[8px] justify-center cursor-pointer ${
                content === "MasterCard" ? "bg-[#EBF5FF] " : "bg-gray-100 "
              }`}
>>>>>>> keroles:src/payment/PaymentPage.tsx
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
<<<<<<< HEAD:src/page/payment/PaymentPage.tsx
              className={` rounded-full w-[128px] flex items-center gap-2 justify-center cursor-pointer ${content === "Visa"
                ? "bg-[#EBF5FF] " : "bg-gray-100 "
                }`}
=======
              className={` rounded-full xs:w-[117px] md:w-[128px] pt-[16px] pb-[16px] pr-[24px] pl-[24px] flex items-center gap-[8px] justify-center cursor-pointer ${
                content === "Visa" ? "bg-[#EBF5FF] " : "bg-gray-100 "
              }`}
>>>>>>> keroles:src/payment/PaymentPage.tsx
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
