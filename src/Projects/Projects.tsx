import { Box, Link, Typography } from "@mui/material";

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
            height: "auto",
            border: "1px solid black",
            borderRadius: "20px",
            p: 2,
            m: 1,
          }}
        >
          <Typography>TinderSwipe</Typography>
          <Typography>
            <strong>Stack: </strong>
            <span>HTML, CSS, JavaScript</span>
          </Typography>
          <Link href="https://caszofficial.github.io/TinderSwipe/">
            Visit Website
          </Link>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "auto",
            border: "1px solid black",
            borderRadius: "20px",
            p: 2,
            m: 1,
          }}
        >
          <Typography>
            Web E-commerce
            <span>
              <strong>Full Stack App</strong>
            </span>
          </Typography>
          <Typography>
            <strong>Stack: </strong>
            <span>HTML,CSS,MaterialUI, TypeScript, NodeJS, SQL</span>
          </Typography>
          <Link href="https://ecommerce-frontend-xuth.onrender.com">
            Visit Website
          </Link>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "auto",
            border: "1px solid black",
            borderRadius: "20px",
            p: 2,
            m: 1,
          }}
        >
          <Typography>Todo List</Typography>
          <Typography>
            <strong>Stack: </strong>
            <span>HTML, CSS, JavaScript, React</span>
          </Typography>
          <Link href="https://caszofficial.github.io/TodoList/">
            Visit Website
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
