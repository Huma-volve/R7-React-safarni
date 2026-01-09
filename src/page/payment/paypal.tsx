import { Box, Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Email as EmailIcon } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PayPal() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const fullNamePlaceholder = "full name your card";
  const emailPlaceholder = "kneeDue@untitledui.com";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleSubmit = () => {
    if (!fullName.trim() || !email.trim()) {
      alert("من فضلك املأ كل الحقول");
      return;
    }

    // منع كتابة نفس نص الـ placeholder
    if (fullName === fullNamePlaceholder || email === emailPlaceholder) {
      alert("من فضلك أدخل بيانات مختلفة عن النص الافتراضي");
      return;
    }

    // التحقق من تنسيق الإيميل
    if (!emailRegex.test(email)) {
      alert("من فضلك أدخل بريد إلكتروني صحيح مثل: example@mail.com");
      return;
    }

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

      <div className="mb-6">
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
          marginBottom:{xs:"95px",md:"0px"},
        }}
      >
        Confirm Booking
      </Button>
    </Box>
  );
}
