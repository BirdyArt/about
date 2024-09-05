import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FilePdf, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const HeroPanel = ({ isOpen }: { isOpen: boolean }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const { box1 } = variants;

  return (
    <motion.div
      style={{
        height: desktop ? "100vh" : "85vh",
        width: desktop ? "90vw" : "100vw",
        x: 0,
        backgroundColor: "#F7F7F7",
        borderRightColor: "black",
        borderRightStyle: "solid",
        borderRightWidth: desktop ? "max(6px, 0.5vw)" : 0,
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderBottomWidth: desktop ? 0 : "max(6px, 0.5vw)",
        display: "flex",
        alignItems: "center",
        justifyContent: desktop ? "left" : "center",
        marginLeft: desktop ? "12vw" : 0,
      }}
      animate={!isOpen ? "open" : "closed"}
      variants={box1}
    >
      <Box>
        <Typography
          fontFamily={"staatliches"}
          width={"100%"}
          fontSize={desktop ? "12vw" : "12vh"}
          lineHeight={desktop ? "10vw" : "10vh"}
          fontWeight={600}
          pt={2}
          color="black"
          textAlign={desktop ? "left" : "center"}
        >
          Artem
        </Typography>
        <Typography
          fontFamily={"staatliches"}
          width={"100%"}
          fontSize={desktop ? "12vw" : "12vh"}
          lineHeight={desktop ? "9vw" : "9vh"}
          fontWeight={600}
          color="black"
          textAlign={desktop ? "left" : "center"}
        >
          Sobolev
        </Typography>
        <Typography
          width={"100%"}
          fontSize={desktop ? "3vw" : "4vh"}
          fontWeight={600}
          color="black"
          textAlign={desktop ? "left" : "center"}
        >
          frontend developer
        </Typography>
        <Box
          display={"flex"}
          py={1}
          justifyContent={desktop ? "flex-start" : "center"}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <IconButton
              href="/cv.pdf"
              download
              type="contained"
              sx={{
                fontSize: desktop ? "2.5vw" : "3.5vh",
                padding: desktop ? "0.7vw" : "1.5vh",
                bgcolor: "black",
                color: "#F5F5F5",
                mr: desktop ? 4 : 2,
                "&:hover": {
                  backgroundColor: "text.secondary",
                },
              }}
              aria-label="read cv link"
            >
              <FilePdf />
            </IconButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <IconButton
              href="https://www.linkedin.com/in/artem-sobolev/"
              target="_blank"
              sx={{
                fontSize: desktop ? "2.5vw" : "3.5vh",
                padding: desktop ? "0.7vw" : "1.5vh",
                bgcolor: "black",
                color: "#F5F5F5",
                mr: desktop ? 4 : 2,
                "&:hover": {
                  backgroundColor: "text.secondary",
                },
              }}
              aria-label="linkedin link"
            >
              <LinkedinLogo />
            </IconButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <IconButton
              href="https://github.com/BirdyArt"
              target="_blank"
              sx={{
                fontSize: desktop ? "2.5vw" : "3.5vh",
                padding: desktop ? "0.7vw" : "1.5vh",
                bgcolor: "black",
                color: "#F5F5F5",
                "&:hover": {
                  backgroundColor: "text.secondary",
                },
              }}
              aria-label="github link"
            >
              <GithubLogo />
            </IconButton>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default HeroPanel;
