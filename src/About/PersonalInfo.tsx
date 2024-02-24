import { Box, Typography } from "@mui/material";
import { name, short_about_me, role } from "../DataJson/data.json";

const PersonalInfo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {role}
      </Typography>
      <Typography sx={{ width: "300px" }}>{short_about_me}</Typography>
    </Box>
  );
};

export default PersonalInfo;
