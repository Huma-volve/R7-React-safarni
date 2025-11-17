import { Box } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
export default function Back() {
    let navigate = useNavigate();
  return (
    <Box
      sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      onClick={() => navigate(-1)}
    >
      <div className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center">
        <NavigateBeforeIcon className="text-[24px]" />
      </div>
    </Box>
  );
}
