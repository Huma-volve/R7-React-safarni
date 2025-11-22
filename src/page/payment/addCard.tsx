import { Container, Stack, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCard() {
  const [addcard, setAddCcard] = useState({
    cardNum: "",
    validDate: "",
    cvv: "",
    cardName: "",
  });

  let navigate = useNavigate();

  const cvvRegex = /^[0-9]{3,4}$/;
  const cardRegex = /(\d{4}\s?){4}/g;

  const handleCardNumChange = (e: any) => {
    let input = e.target.value;

    input = input.replace(/\s/g, "");
    input = input.replace(/\D/g, "");

    const formatted = input.match(/.{1,4}/g)?.join(" ") || "";

    setAddCcard({ ...addcard, cardNum: formatted });
  };

  const handleExpiryChange = (e: any) => {
    let input = e.target.value;

    input = input.replace(/\D/g, "");

    if (input.length > 4) input = input.slice(0, 4);

    if (input.length > 2) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    }

    let month = input.slice(0, 2);
    if (parseInt(month) > 12) month = "12";

    if (input.length > 2) {
      input = month + "/" + input.slice(3);
    } else {
      input = month;
    }

    setAddCcard({ ...addcard, validDate: input });
  };
  const isExpiryValid = (expiry: any) => {
    if (!expiry.includes("/")) return false;

    const [month, year] = expiry.split("/").map((x: any) => parseInt(x));

    if (!month || !year || month < 1 || month > 12) return false;

    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear() % 100;

    if (year < currentYear) return false;

    if (year === currentYear && month < currentMonth) return false;

    return true;
  };

  const handleSubmit = () => {
    if (
      !addcard.validDate ||
      !addcard.cvv ||
      !addcard.cardNum ||
      !addcard.cardName
    ) {
      alert("من فضلك املأ كل الحقول قبل المتابعة");
      return;
    }

    if (!cvvRegex.test(addcard.cvv)) {
      alert("من فضلك أدخل CVV صحيح (3 أو 4 أرقام فقط)");
      return;
    }

    if (!cardRegex.test(addcard.cardNum)) {
      alert("من فضلك أدخل رقم كارت صحيح");
      return;
    }

    if (!isExpiryValid(addcard.validDate)) {
      alert("تاريخ انتهاء البطاقة غير صالح أو البطاقة منتهية");
      return;
    }

    navigate("/addcard");
  };

  return (
    <Container>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0px", md: "105px" },
          justifyContent: { xs: "center", md: "space-between" },
          marginTop: "20px",
        }}
      >
        {/* Left Side */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <img
            src="/assets/destination/paymentPage/Rectangle 20.png"
            alt=""
            className="m-auto"
          />
        </Box>
        {/* Right Side */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop:{xs:"20px",md:"0"}
          }}
        >
          <TextField
            id="outlined-basic"
            label="Card Number"
            variant="outlined"
            value={addcard.cardNum}
            onChange={handleCardNumChange}
          />

          <Stack
            direction={"row"}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <TextField
              id="outlined-basic"
              label="CVV"
              variant="outlined"
              value={addcard.cvv}
              onChange={(e) => setAddCcard({ ...addcard, cvv: e.target.value })}
              sx={{ width: "49%" }}
            />

            <TextField
              id="outlined-basic"
              label="(MM/YY)"
              variant="outlined"
              value={addcard.validDate}
              onChange={handleExpiryChange}
              sx={{ width: "49%" }}
            />
          </Stack>

          <TextField
            id="outlined-basic"
            label="Cardholder Name"
            variant="outlined"
            value={addcard.cardName}
            onChange={(e) =>
              setAddCcard({ ...addcard, cardName: e.target.value })
            }
          />

          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "65px",
              backgroundColor: "#1E429F",
              fontSize: "20px",
              fontWeight: "600",
              padding: "8px 16px",
              textTransform: "none",
            }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
