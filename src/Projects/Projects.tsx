import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Projects
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          sx={{
            width: "30%",
            height: 250,
            border: "1px solid black",
            borderRadius: "20px",
            p: 2,
            m: 1,
          }}
        >
          Project 1
        </Box>
        <Box
          sx={{
            width: "30%",
            height: 250,
            border: "1px solid black",
            borderRadius: "20px",
            p: 2,
            m: 1,
          }}
        >
          PRoject 2
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
