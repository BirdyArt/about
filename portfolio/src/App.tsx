import { Box } from "@mui/material";
import Hero from "./components/Hero";
import AppBarTop from "./components/AppBar";
import Careers from "./components/Careers";
import Works from "./components/Works";

const App = () => {
  return (
    <Box bgcolor={"#F7F7F7"}>
      <AppBarTop />
      <Hero />
      <Careers />
      <Works />
    </Box>
  );
};

export default App;
