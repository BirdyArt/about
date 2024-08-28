import { Box, IconButton, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import Typewriter from "./TypeWriter";
import { FilePdf, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      height={{
        xs: `calc(${window.innerHeight}px - 72px)`,
        md: `calc(${window.innerHeight}px - 192px)`,
      }}
      minHeight={{ xs: "100%", md: "auto" }}
      display={{ xs: "flex", md: "flex" }}
      alignItems={"center"}
      textAlign={{ xs: "center", md: "left" }}
      justifyContent={"center"}
      px={{ xs: 2, md: 24, lg: 32 }}
    >
      <Box display={{ xs: "block", md: "flex" }} alignItems={"center"}>
        <Box mr={{ xs: 0, md: 4 }}>
          <Typewriter
            text="Hi, I am a software developer based in Vancouver, Canada."
            delay={30}
            sx={{
              typography: { xs: "h5", md: "h4" },
              fontWeight: { xs: "400", md: "300 !important" },
            }}
          />
          <Fade triggerOnce delay={2000}>
            <Typography
              sx={{
                typography: { xs: "body1", md: "h6" },
                fontWeight: { xs: "400", md: "300 !important" },
              }}
              py={{ xs: 2, md: 0 }}
            >
              Over the years I developed a skill set in a range of technologies
              and frameworks. I really value clean and readable code. Also I'm
              very passionate about UX / UI.
            </Typography>
            <Box
              display={"flex"}
              py={1}
              justifyContent={{ xs: "center", md: "start" }}
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
                    bgcolor: "black",
                    color: "#F5F5F5",
                    mr: 2,
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
                    bgcolor: "black",
                    color: "#F5F5F5",
                    mr: 2,
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
                    bgcolor: "black",
                    color: "#F5F5F5",
                    mr: 2,
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
          </Fade>
        </Box>
        <Fade triggerOnce cascade delay={2000}>
          <Box position="relative">
            <Box
              component="img"
              src="/arrow.svg"
              alt="curved arrow"
              sx={{
                display: { xs: "none", xl: "block" },
                position: "absolute",
                zIndex: 1,
                width: "120px",
                left: "-150px",
                bottom: "20px",
                transform: "rotateX(180deg) rotate(-50deg)",
              }}
            />
            <Box
              component="img"
              src="/me.jpg"
              alt="profile picture"
              sx={{
                filter: "grayscale(100%)",
                maxWidth: { xs: "250px", md: "300px" },
                padding: "10px",
                border: "20px solid #0000",
                outline: "1px solid #000000",
                outlineOffset: "-10px",
                background:
                  "conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0)",
              }}
            />
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default Hero;
