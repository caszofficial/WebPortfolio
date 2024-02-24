import { Box, Typography } from "@mui/material";
import { neostella_experience } from "../DataJson/data.json";
const Experience = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Experience
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Neostella
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Front End Web Developer
        </Typography>
        <Typography>2021-2023</Typography>
      </Box>
      <Typography sx={{ color: "gray" }}>{neostella_experience}</Typography>
    </Box>
  );
};

export default Experience;
