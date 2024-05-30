import { Box } from "@mui/material";
import Hero from "./components/Hero";
import AppBarTop from "./components/AppBar";
import Careers from "./components/Careers";
import Works from "./components/Works";

const App = () => {
  return (
    <Box bgcolor={"#F5F5F5"}>
      <AppBarTop />
      <Hero />
      <Careers />
      <Works />
    </Box>
  );
};

export default App;
