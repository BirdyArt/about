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

const SidePanel = ({ isOpen }: { isOpen: boolean }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const { box2, box3 } = variants;

  return (
    <Box
      sx={{
        borderLeftColor: "black",
        borderLeftStyle: "solid",
        borderLeftWidth: "max(6px, 0.5vw)",
      }}
    >
      <motion.div
        style={{
          height: "50vh",
          width: "10vw",
          y: 0,
          backgroundColor: "#F7F7F7",
          borderBottomColor: "black",
          borderBottomStyle: "solid",
          borderBottomWidth: "max(3px, 0.25vw)",
          boxSizing: "border-box",
        }}
        animate={!isOpen ? "open" : "closed"}
        variants={box2}
      >
        <Box
          display={"flex"}
          py={1}
          height="100%"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
            style={{ textAlign: "center" }}
          >
            <IconButton
              href="/cv.pdf"
              download
              type="contained"
              sx={{
                fontSize: "2vw",
                padding: "0.5vw",
                bgcolor: "black",
                color: "#F5F5F5",
                mb: desktop ? 4 : 2,
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
            style={{ textAlign: "center" }}
          >
            <IconButton
              href="https://www.linkedin.com/in/artem-sobolev/"
              target="_blank"
              sx={{
                fontSize: "2vw",
                padding: "0.5vw",
                bgcolor: "black",
                color: "#F5F5F5",
                mb: desktop ? 4 : 2,
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
            style={{ textAlign: "center" }}
          >
            <IconButton
              href="https://github.com/BirdyArt"
              target="_blank"
              sx={{
                fontSize: "2vw",
                padding: "0.5vw",
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
      </motion.div>
      <motion.div
        style={{
          height: "50vh",
          width: "10vw",
          y: desktop ? "50vh" : 0,
          backgroundColor: "#F7F7F7",
          borderTopColor: "black",
          borderTopStyle: "solid",
          borderTopWidth: "max(3px, 0.25vw)",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={!isOpen ? "open" : "closed"}
        variants={box3}
      >
        <Box sx={{ transform: "rotate(-90deg)" }}>
          <Typography
            fontFamily={"staatliches"}
            width={"100%"}
            fontSize={"4vw"}
            lineHeight={"3vw"}
            fontWeight={600}
            pt={2}
            color="black"
          >
            Artem
          </Typography>
          <Typography
            fontFamily={"staatliches"}
            width={"100%"}
            fontSize={"4vw"}
            lineHeight={"3vw"}
            fontWeight={600}
            color="black"
          >
            Sobolev
          </Typography>
          <Typography
            width={"100%"}
            fontSize={"1vw"}
            fontWeight={600}
            color="black"
          >
            frontend developer
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SidePanel;
