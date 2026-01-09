import { Box, TextField, Button, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Lock, Email as EmailIcon } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MasterCard() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [validDate, setValidDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const cvvRegex = /^[0-9]{3,4}$/;

  const handleSubmit = () => {
    // منع الحقول الفارغة
    if (!fullName || !email || !validDate || !cvv) {
      alert("من فضلك املأ كل الحقول قبل المتابعة");
      return;
    }
    // تحقق الإيميل
    if (!emailRegex.test(email)) {
      alert("من فضلك أدخل بريد إلكتروني صحيح مثل example@mail.com");
      return;
    }

    // تحقق CVV
    if (!cvvRegex.test(cvv)) {
      alert("من فضلك أدخل CVV صحيح (3 أو 4 أرقام فقط)");
      return;
    }
    // تحقق Valid Date
    // صيغة MM/YY أو MM/YYYY
    const dateRegex = /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
    if (!dateRegex.test(validDate)) {
      alert("من فضلك أدخل تاريخ صالح بصيغة MM/YY أو MM/YYYY");
      return;
    }
    // تحقق من أن البطاقة لم تنتهِ صلاحيتها
    const [monthStr, yearStr] = validDate.split("/");
    const month = parseInt(monthStr, 10);
    let year = parseInt(yearStr, 10);
    if (yearStr.length === 2) {
      // تحويل YY إلى YYYY
      const currentYear = new Date().getFullYear();
      const currentCentury = Math.floor(currentYear / 100) * 100;
      year += currentCentury;
    }

    const now = new Date();

    const endOfMonth = new Date(year, month, 0); // آخر يوم في الشهر

    if (endOfMonth < now) {
      alert("تاريخ صلاحية البطاقة منتهي");
      return;
    }

    // لو كل شيء تمام
    navigate("/paymentpage/succfullypay");
  };

  return (
    <Box className="p-4">
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <TextField
          fullWidth
          id="fullName"
          variant="outlined"
          placeholder="full name your card"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          InputProps={{
            startAdornment: (
              <PersonIcon fontSize="small" className="text-gray-400 mr-2" />
            ),
          }}
          className="bg-white"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Email
        </label>
        <TextField
          fullWidth
          id="email"
          variant="outlined"
          placeholder="kneeDue@untitledui.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <EmailIcon fontSize="small" className="text-gray-400 mr-2" />
            ),
          }}
          className="bg-white"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <div className="flex-1 w-[45%]">
          <label
            htmlFor="validDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Valid Date
          </label>
          <TextField
            fullWidth
            id="validDate"
            variant="outlined"
            placeholder="MM/YY"
            value={validDate}
            onChange={(e) => {
              let value = e.target.value;
              value = value.replace(/[^0-9\/]/g, "");
              if (value.length === 2 && !value.includes("/")) {
                value = value + "/";
              }
              if (value.length > 5) {
                value = value.slice(0, 5);
              }
              setValidDate(value);
            }}
            inputProps={{
              maxLength: 5,
            }}
            className="bg-white"
          />
        </div>

        <div className="flex-1 w-[45%]">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cvv
          </label>
          <TextField
            fullWidth
            type="number"
            id="cvv"
            variant="outlined"
            placeholder="522"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    width: { xs: "15px", md: "25px" },
                    justifyContent: "center",
                  }}
                >
                  <Lock
                    className="text-gray-400"
                  
                  />
                </InputAdornment>
              ),
            }}
            className="bg-white"
          />
        </div>
      </div>

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{
          backgroundColor: "#1E429F",
          fontSize: "20px",
          fontWeight: "600",
          padding: "8px 16px",
          textTransform: "none",
          marginBottom: { xs: "90px", md: "0px" },
        }}
      >
        Confirm Booking
      </Button>
    </Box>
  );
}
