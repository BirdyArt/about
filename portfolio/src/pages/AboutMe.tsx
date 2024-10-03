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
      sx={{
        display: "flex",
        flexDirection: desktop ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        height: desktop ? window.innerHeight : "auto",
        pl: { xs: 4, md: 18 },
        pr: { xs: 4, md: 32 },
      }}
    >
      <motion.div initial="offscreen" whileInView="onscreen">
        <motion.div variants={aboutMe}>
          <Typography
            sx={{
              typography: { xs: "body1", md: "h6" },
              fontWeight: { xs: "400", md: "300 !important" },
              mt: desktop ? 0 : "14vh",
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
        viewport={{ amount: 0.1 }}
      >
        <motion.div
          variants={aboutMe}
          style={{ textAlign: "center", width: "100%" }}
        >
          <Box
            component="img"
            src="/me.jpg"
            alt="profile picture"
            sx={{
              filter: "grayscale(100%)",
              maxWidth: "80%",
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
