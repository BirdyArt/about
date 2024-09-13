import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";
import { useRef, useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Tools from "./Tools";

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
        height: desktop ? "100vh" : "85vh",
        width: desktop ? "90vw" : "100%",
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
      </motion.div>
    </Box>
  );
};

export default Container;
