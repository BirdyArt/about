import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const AboutMe = ({ isOpen }: { isOpen: boolean }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const { aboutMe } = variants;

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 0,
        height: desktop ? "100vh" : "85vh",
        width: desktop ? "90vw" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        overflow: "hidden",
        mx: desktop ? 4 : 0,
      }}
    >
      {desktop ? null : (
        <Typography
          fontFamily={"staatliches"}
          width={"100%"}
          fontSize={"8vh"}
          fontWeight={600}
          color="black"
          ml={8}
        >
          About Me
        </Typography>
      )}
      <motion.div
        style={{
          display: "flex",
          flexDirection: desktop ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={isOpen ? "open" : "closed"}
        variants={aboutMe}
      >
        <Box>
          {desktop ? (
            <Box ml={4}>
              <Typography
                fontFamily={"staatliches"}
                width={"100%"}
                fontSize={desktop ? "4vw" : "8vh"}
                fontWeight={600}
                color="black"
              >
                About Me
              </Typography>
            </Box>
          ) : null}
          <Typography
            sx={{
              typography: { xs: "body1", md: "h6" },
              fontWeight: { xs: "400", md: "300 !important" },
              mx: desktop ? 4 : 4,
              mt: 1,
              maxWidth: desktop ? "30vw" : "100%",
            }}
          >
            I am a front-end developer based in Vancouver, Canada. My passion is
            crafting engaging and user-friendly experiences, that leave a
            lasting impression. I value clean code, attention to details, and a
            strong work ethic. From sleek and modern UI to interactive
            feautures, I leverage latest tech to bring ideas to life.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/me.jpg"
          alt="profile picture"
          sx={{
            filter: "grayscale(100%)",
            maxWidth: { xs: "60vw", md: "25vw" },
            borderRadius: "16px",
            my: 4,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default AboutMe;
