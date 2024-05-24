import { Box } from "@mui/material";
import Hero from "./components/Hero";
import AppBarTop from "./components/AppBar";
import Careers from "./components/Careers";

const App = () => {
  return (
    <Box>
      <AppBarTop />
      <Hero />
      <Careers />
    </Box>
  );
};

export default App;
