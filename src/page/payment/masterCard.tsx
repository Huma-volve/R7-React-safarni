import { Box, TextField, Button } from "@mui/material";
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

  const fullNamePlaceholder = "kneeDue@untitledui.com";
  const emailPlaceholder = "kneeDue@untitledui.com";
  const datePlaceholder = "12-6-2024";
  const cvvPlaceholder = "522";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const cvvRegex = /^[0-9]{3,4}$/;

  const handleSubmit = () => {
    // منع الحقول الفارغة
    if (!fullName || !email || !validDate || !cvv) {
      alert("من فضلك املأ كل الحقول قبل المتابعة");
      return;
    }

    // منع كتابة نفس placeholder
    if (
      fullName === fullNamePlaceholder ||
      email === emailPlaceholder ||
      validDate === datePlaceholder ||
      cvv === cvvPlaceholder
    ) {
      alert("من فضلك أدخل بيانات صحيحة وليست النص الافتراضي");
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

    // لو كل شيء تمام
    navigate("/paymentpage/succfullypay");
  };

  return (
    <Box className="p-4">
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <TextField
          fullWidth
          id="fullName"
          variant="outlined"
          placeholder={fullNamePlaceholder}
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <TextField
          fullWidth
          id="email"
          variant="outlined"
          placeholder={emailPlaceholder}
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
        <div className="flex-1">
          <label htmlFor="validDate" className="block text-sm font-medium text-gray-700 mb-1">
            Valid Date
          </label>
          <TextField
            fullWidth
            id="validDate"
            variant="outlined"
            placeholder={datePlaceholder}
            value={validDate}
            onChange={(e) => setValidDate(e.target.value)}
            className="bg-white"
          />
        </div>

        <div className="w-1/4">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
            Cvv
          </label>
          <TextField
            fullWidth
            id="cvv"
            variant="outlined"
            placeholder={cvvPlaceholder}
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            InputProps={{
              endAdornment: (
                <Lock fontSize="small" className="text-gray-400 ml-1" />
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
        }}
      >
        Confirm Booking
      </Button>
    </Box>
  );
}
