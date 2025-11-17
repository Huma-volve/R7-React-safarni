import { Box, Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Email as EmailIcon } from "@mui/icons-material";
export default function PayPal() {
  return (
    <Box className=" p-4">
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
          placeholder="kneeDue@untitledui.com"
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
          placeholder="kneeDue@untitledui.com"
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
        sx={{
          backgroundColor: "#1E429F",
          fontSize: "20px",
          fontWeight: "600",
          padding: "8px 16px",
        }}
      >
        Confirm Booking
      </Button>
    </Box>
  );
}
