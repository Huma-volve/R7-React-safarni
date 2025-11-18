import { Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
export default function Back() {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(-1)}
    >
      <div className="bg-gray-100 rounded-full w-10 h-10 mt-12  flex items-center justify-center">
        <NavigateBeforeIcon className="text-[24px]" />
      </div>
    </Box>
  );
}
