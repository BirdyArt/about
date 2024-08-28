import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppBarTop from "./components/AppBar";
import Hero from "./components/Hero";
import Careers from "./components/Careers";
import Works from "./components/Works";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box bgcolor={"#F7F7F7"}>
        <AppBarTop />
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </Box>
    </BrowserRouter>
  );
}

function LocationProvider({ children }: { children: React.ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Hero />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  );
}

export default App;
