import { Box, Typography } from "@mui/material";
import { about_me } from "../DataJson/data.json";

const About = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        About Me
      </Typography>
      <Typography sx={{ color: "gray" }}>{about_me}</Typography>
    </Box>
  );
};

export default About;
