import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "30px", color: "darkorange" }}
        >
          Profile Page
        </Typography>
      </Box>
      <Link to="/home">
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
        >
          Go to Home
        </Typography>
      </Link>
    </Box>
  );
}

export default Profile;
