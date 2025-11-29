import { Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
export default function Back() {
  const navigate = useNavigate();
  return (
    <Box sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <div
        className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <NavigateBeforeIcon className="text-[24px]" />
      </div>
    </Box>
  );
}
