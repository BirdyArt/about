import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  FilePdf,
  FirstAid,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const box1 = {
    open: {
      x: desktop ? "0.5vw" : 0,
      y: desktop ? 0 : 7,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    closed: {
      x: desktop ? "-90vw" : 0,
      y: desktop ? 0 : "-86vh",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const box2 = {
    open: {
      y: "-50vh",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    closed: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const box3 = {
    open: {
      y: "50vh",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    closed: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const box4 = {
    open: {
      y: "85vh",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    closed: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const button = {
    open: {
      rotate: 0,
      color: "#388e3c",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    closed: {
      rotate: 315,
      color: "#d32f2f",
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <Box display={desktop ? "flex" : "block"} overflow={"hidden"}>
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
      {desktop ? (
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
      ) : (
        <Box
          sx={{
            borderTopColor: "black",
            borderTopStyle: "solid",
            borderTopWidth: "max(6px, 0.5vw)",
          }}
        >
          <motion.div
            style={{
              height: "calc(15vh - 12px)",
              width: "100vw",
              backgroundColor: "#F7F7F7",
              boxSizing: "border-box",
            }}
            animate={!isOpen ? "open" : "closed"}
            variants={box4}
          >
            <ButtonGroup
              variant="text"
              aria-label="Basic button group"
              fullWidth
              sx={{
                height: "100%",
              }}
            >
              <Button
                href="/cv.pdf"
                download
                aria-label="read cv link"
                sx={{
                  borderRight: "none !important",
                  color: "black",
                  pt: 3,
                  borderRadius: 0,
                }}
              >
                <FilePdf size={36} fill="black" weight="bold" />
              </Button>
              <Button
                href="https://www.linkedin.com/in/artem-sobolev/"
                target="_blank"
                aria-label="linkedin link"
                sx={{
                  borderRight: "none !important",
                  color: "black",
                  pt: 3,
                }}
              >
                <LinkedinLogo size={36} fill="black" weight="bold" />
              </Button>
              <Button
                href="https://github.com/BirdyArt"
                target="_blank"
                aria-label="github link"
                sx={{ color: "black", pt: 3, borderRadius: 0 }}
              >
                <GithubLogo size={36} fill="black" weight="bold" />
              </Button>
            </ButtonGroup>
          </motion.div>
        </Box>
      )}
      <motion.div
        animate={!isOpen ? "open" : "closed"}
        variants={button}
        style={{
          position: "absolute",
          top: desktop ? "50%" : "85%",
          left: desktop ? "90%" : "50%",
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

export default Hero;
