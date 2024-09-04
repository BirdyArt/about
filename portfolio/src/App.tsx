import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AppBarTop from "./components/AppBar";
import Hero from "./components/Hero";
import Careers from "./components/Careers";
import Works from "./components/Works";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import AboutMe from "./components/AboutMe";

const InitialTransition = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const blackBox = {
    initial: {
      height: "100%",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
      height: desktop ? "8vw" : "12vh",
    },
    animate: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

  const text = {
    initial: {
      y: 0,
    },
    animate: {
      y: desktop ? "4.1vw" : "6.1vh",
      transition: {
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "black",
      }}
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg
        variants={textContainer}
        style={{
          position: "absolute",
          zIndex: 50,
          display: "flex",
          width: "100%",
        }}
      >
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          style={{ color: "white" }}
        >
          <rect
            style={{ width: "100%", height: "100%", fill: "currentcolor" }}
          />
          <motion.rect
            variants={text}
            style={{
              width: "100%",
              height: "100%",
              fill: "currentcolor",
              color: "grey",
            }}
          />
        </pattern>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{
            fill: "url(#pattern)",
            fontSize: desktop ? "4vw" : "6vh",
            fontWeight: 700,
            fontFamily: "staatliches",
          }}
        >
          ARTEM SOBOLEV
        </text>
      </motion.svg>
    </motion.div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <InitialTransition />
      <Box bgcolor={"#F7F7F7"}>
        {/* <AppBarTop /> */}
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
      <Route path="/about" element={<AboutMe />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  );
}

export default App;
