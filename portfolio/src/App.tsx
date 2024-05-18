import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  return (
    <Box bgcolor={"#F5F5F5"} px={32} pt={16}>
      <AppBar
        position="static"
        sx={{
          background: "#F5F5F5",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h3" color="#000000" fontWeight={300}>
            Artem Sobolev
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        width={"100%"}
        height={`calc(${window.innerHeight}px - 192px)`}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Box>
            <Typography variant="h4" mr={4} fontWeight={300}>
              Hi, I am a full stack developer
            </Typography>
            <Typography variant="h2" mr={4}></Typography>
          </Box>
          <Box width={"300px"}>
            <img
              src="/me.jpg"
              alt="Artem Sobolev"
              width={"100%"}
              style={{
                filter: "grayscale(100%)",
                padding: "10px",
                border: "20px solid #0000",
                outline: "1px solid #000000",
                outlineOffset: "-10px",
                background:
                  "conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
