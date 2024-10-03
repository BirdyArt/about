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
      sx={{
        display: "flex",
        flexDirection: desktop ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        height: desktop ? window.innerHeight : "auto",
      }}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => setCurrentPage("tools")}
        viewport={{ amount: 0.1 }}
        style={{ overflow: "scroll" }}
      >
        <motion.div variants={aboutMe}>
          <Grid
            container
            spacing={4}
            sx={{
              my: { xs: 10, lg: 0 },
              pr: { xs: 4, lg: 32 },
              pl: { xs: 4, lg: 18 },
            }}
          >
            <Grid item xs={12} md={4}>
              <Typography variant="h3">Code</Typography>
              <Typography variant="body1" gutterBottom>
                Crafting clean, maintainable, and efficient code is my go-to
                strategy. I strive for simplicity, ensuring that every line
                serves a purpose. By adhering to best practices and coding
                standards, I deliver robust solutions that are both scalable and
                easy to understand.
              </Typography>
              {codeTools.map(({ image, title }) => (
                <Box
                  component="img"
                  src={image}
                  alt={`logo of ${title}`}
                  sx={{
                    height: "32px",
                    maxWidth: "100%",
                    mr: 1,
                  }}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h3">Frameworks</Typography>
              <Typography variant="body1" gutterBottom>
                These powerful resources enable rapid development and ensure my
                projects are equipped with the latest functionalities and
                optimizations, providing a seamless user experience.
              </Typography>
              {frameworksTools.map(({ image, title }) => (
                <Box
                  component="img"
                  src={image}
                  alt={`logo of ${title}`}
                  sx={{
                    height: "32px",
                    maxWidth: "100%",
                    mr: 1,
                  }}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h3">Operations</Typography>
              <Typography variant="body1" gutterBottom>
                From version control to build automation, these tools help
                manage complexity, ensure code quality, and facilitate
                continuous integration and deployment, making development more
                efficient and reliable.
              </Typography>
              {operationsTools.map(({ image, title }) => (
                <Box
                  component="img"
                  src={image}
                  alt={`logo of ${title}`}
                  sx={{
                    height: "32px",
                    maxWidth: "100%",
                    mr: 1,
                  }}
                />
              ))}
            </Grid>
          </Grid>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Tools;
