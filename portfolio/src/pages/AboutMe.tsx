import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const AboutMe = ({
  setCurrentPage,
}: {
  setCurrentPage: (currentPage: string) => void;
}) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const { aboutMe } = variants;

  return (
    <Box
      height={desktop ? "100vh" : "85vh"}
      sx={{
        display: "flex",
        flexDirection: desktop ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "center",
      }}
    >
      <motion.div initial="offscreen" whileInView="onscreen">
        <motion.div variants={aboutMe}>
          <Typography
            sx={{
              typography: { xs: "body1", md: "h6" },
              fontWeight: { xs: "400", md: "300 !important" },
              mx: 4,
              mt: desktop ? 0 : "14vh",
              maxWidth: desktop ? "30vw" : "100%",
            }}
          >
            I am a front-end developer based in Vancouver, Canada. My passion is
            crafting engaging and user-friendly experiences, that leave a
            lasting impression. I value clean code, attention to details, and a
            strong work ethic. From sleek and modern UI to interactive
            feautures, I leverage latest tech to bring ideas to life.
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => setCurrentPage("about me")}
        viewport={{ amount: 0.7 }}
      >
        <motion.div variants={aboutMe}>
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
      </motion.div>
    </Box>
  );
};

export default AboutMe;
