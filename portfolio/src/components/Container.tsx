import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";
import { useRef, useState } from "react";
import Header from "./Header";
import AboutMe from "../pages/AboutMe";
import Tools from "../pages/Tools";
import Careers from "../pages/Careers";
import Works from "../pages/Works";

const Container = ({ isOpen }: { isOpen: boolean }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const [currentPage, setCurrentPage] = useState("about me");
  const ref = useRef(null);
  const { container } = variants;

  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute",
        zIndex: 0,
        height: desktop ? "100%" : "85%",
        width: desktop ? "90%" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        overflow: "scroll",
        mx: desktop ? 4 : 0,
      }}
    >
      <motion.div animate={isOpen ? "open" : "closed"} variants={container}>
        <Header currentPage={currentPage} />
        <AboutMe setCurrentPage={setCurrentPage} />
        <Tools setCurrentPage={setCurrentPage} />
        <Careers setCurrentPage={setCurrentPage} />
        <Works setCurrentPage={setCurrentPage} />
      </motion.div>
    </Box>
  );
};

export default Container;
