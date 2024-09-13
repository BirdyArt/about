import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const Tools = ({
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
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => setCurrentPage("tools")}
        viewport={{ amount: 0.7 }}
      >
        <motion.div variants={aboutMe}>
          <Typography
            sx={{
              typography: { xs: "body1", md: "h6" },
              fontWeight: { xs: "400", md: "300 !important" },
              mx: desktop ? 4 : 4,
              mt: desktop ? 0 : "14vh",
              maxWidth: desktop ? "30vw" : "100%",
            }}
          >
            Tools I use to build websites and applications include React,
            Next.js, Material-UI, and Framer Motion. I also have experience with
            TypeScript, GraphQL, and Node.js. I am always learning and
            experimenting with new technologies to improve my skills and stay
            up-to-date with the latest trends in web development.
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Tools;
