import { Box, Grid, Paper } from "@mui/material";
import About from "./About/About";
import TechStack from "./Skills/Skills";
import PersonalInfo from "./About/PersonalInfo";
import image from "./Media/Me.jpg";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

function App() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
      <Paper elevation={2} sx={{ width: "40%", p: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={image}
                width={150}
                height={180}
                sx={{ borderRadius: "20px" }}
              />
              <PersonalInfo />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <About />
          </Grid>
          <Grid item xs={12}>
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Grid item xs={12}>
            <TechStack />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default App;
