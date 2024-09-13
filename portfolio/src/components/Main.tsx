import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { FirstAid } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";
import useVariants from "../hooks/useVariants";
import HeroPanel from "./HeroPanel";
import SidePanel from "./SidePanel";
import BottomPanel from "./BottomPanel";
import Container from "./Container";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const { button } = variants;

  return (
    <Box
      display={desktop ? "flex" : "flex"}
      flexDirection={desktop ? "row" : "column"}
      overflow={"hidden"}
      position="relative"
    >
      <HeroPanel isOpen={isOpen} />
      <Container isOpen={isOpen} />
      {desktop ? (
        <SidePanel isOpen={isOpen} />
      ) : (
        <BottomPanel isOpen={isOpen} />
      )}
      <motion.div
        animate={!isOpen ? "open" : "closed"}
        variants={button}
        style={{
          position: "absolute",
          top: desktop ? "50%" : "85%",
          left: desktop ? "90%" : "50%",
          zIndex: 1,
        }}
      >
        <IconButton
          sx={{
            bgcolor: "#F7F7F7",
            color: "inherit",
            borderWidth: "max(5px, 0.5vw)",
            borderStyle: "solid",
            borderColor: "black",
            position: "absolute",
            top: desktop ? "50%" : "85%",
            left: desktop ? "90%" : "50%",
            transform: "translate(-50%, -50%)",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FirstAid size={desktop ? "4vw" : "6vh"} weight="bold" />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Main;
