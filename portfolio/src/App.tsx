import { Box } from "@mui/material";
import Hero from "./components/Hero";
import AppBarTop from "./components/AppBar";

const App = () => {
  return (
    <Box bgcolor={"#F5F5F5"} px={32} pt={16}>
      <AppBarTop />
      <Hero />
    </Box>
  );
};

export default App;
