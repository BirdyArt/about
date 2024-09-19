import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
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

  const codeTools = [
    {
      title: "Javascript",
      image: "/brands/javascript.svg",
    },
    {
      title: "Typescript",
      image: "/brands/typescript.svg",
    },
    {
      title: "CSS3",
      image: "/brands/css3.svg",
    },
    {
      title: "HTML5",
      image: "/brands/html5.svg",
    },
    {
      title: "Prettier",
      image: "/brands/prettier.svg",
    },
  ];

  const frameworksTools = [
    {
      title: "React",
      image: "/brands/react.svg",
    },
    {
      title: "NextJS",
      image: "/brands/nextdotjs.svg",
    },
    {
      title: "MaterialUI",
      image: "/brands/mui.svg",
    },
    {
      title: "ChakraUI",
      image: "/brands/chakraui.svg",
    },
    {
      title: "TailwindCSS",
      image: "/brands/tailwindcss.svg",
    },
    {
      title: "NestJS",
      image: "/brands/nestjs.svg",
    },
    {
      title: "Prisma",
      image: "/brands/prisma.svg",
    },
  ];

  const operationsTools = [
    {
      title: "Azure",
      image: "/brands/azure.svg",
    },
    {
      title: "Docker",
      image: "/brands/docker.svg",
    },
    {
      title: "Github",
      image: "/brands/github.svg",
    },
    {
      title: "Git",
      image: "/brands/git.svg",
    },
    {
      title: "Cypress",
      image: "/brands/cypress.svg",
    },
    {
      title: "Jest",
      image: "/brands/jest.svg",
    },
  ];

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
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                {codeTools.map(({ image, title }) => (
                  <Box
                    component="img"
                    src={image}
                    alt={`logo of ${title}`}
                    sx={{
                      height: "24px",
                      maxWidth: "100%",
                    }}
                  />
                ))}
              </Grid>
              <Grid item xs={12} md={4}>
                {frameworksTools.map(({ image, title }) => (
                  <Box
                    component="img"
                    src={image}
                    alt={`logo of ${title}`}
                    sx={{
                      height: "24px",
                      maxWidth: "100%",
                    }}
                  />
                ))}
              </Grid>
              <Grid item xs={12} md={4}>
                {operationsTools.map(({ image, title }) => (
                  <Box
                    component="img"
                    src={image}
                    alt={`logo of ${title}`}
                    sx={{
                      height: "24px",
                      maxWidth: "100%",
                    }}
                  />
                ))}
              </Grid>
            </Grid>
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Tools;
