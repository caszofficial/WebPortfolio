import { Box, Typography } from "@mui/material";
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";

const TechStack = () => {
  const skillBoxStyle = {
    display: "flex",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    height: "fit-content",
    borderRadius: 2,
    p: 0.5,
    mr: 1,
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Skills
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
      >
        <Box sx={skillBoxStyle}>
          <IconBrandHtml5 />
          <Typography>HTML</Typography>
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandCss3 />
          <Typography>CSS</Typography>
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandJavascript />
          JavaScript
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandGit />
          Git
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandGithub />
          GitHub
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandTypescript />
          TypeScript
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandReact />
          ReactJS
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandNodejs />
          NodeJS
        </Box>
        <Box sx={skillBoxStyle}>
          <IconBrandMysql />
          MySQL
        </Box>
      </Box>
    </Box>
  );
};

export default TechStack;
