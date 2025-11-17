import { Box, TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Lock, Email as EmailIcon } from "@mui/icons-material";
export default function MasterCard() {
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
            placeholder="12-6-2024"
            className="bg-white"
          />
        </div>

        <div className="w-1/4">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cvv
          </label>
          <TextField
            fullWidth
            id="cvv"
            variant="outlined"
            placeholder="522"
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
