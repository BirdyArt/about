import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import WorksCard from "../components/WorksCard";
import { motion } from "framer-motion";
import useVariants from "../hooks/useVariants";

const Works = ({
  setCurrentPage,
}: {
  setCurrentPage: (currentPage: string) => void;
}) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const variants = useVariants();
  const { aboutMe } = variants;

  const works = [
    {
      title: "Birdy Task",
      description:
        "Task scheduler full-stack app build with ChakraUI, NestJS and Prisma and deployed to Azure Container App using CI/CD. Users can signup/login, CRUD tasks, and use nice drag and drop feature.",
      image: "/feather.svg",
      githubUrl: "https://github.com/BirdyArt/BirdyTask",
      demoUrl: "https://birdy-task.azurewebsites.net/",
    },
    {
      title: "Boilerplate",
      description:
        "Modern front-end boilerplate with extensive testing (unit tests with Vitest, component tests using Playwright in three major browsers, all working perfectly in CI/CD), Storybook and fully containerized.",
      image: "/flask.svg",
      githubUrl: "https://github.com/BirdyArt/template",
      demoUrl: "",
    },
    {
      title: "Portfolio",
      description:
        "My personal portfolio build with MaterialUI, Typescript, and Vite. It is fast, lightweight and fully responsive.",
      image: "/briefcase.svg",
      githubUrl: "https://github.com/BirdyArt/about",
      demoUrl: "",
    },
    {
      title: "Old works",
      description:
        "Old portfolio (circa 2022) built with Svelte, Vite, and Tailwind CSS. It contain some of my old works and projects (5 of them) that I built by myself or in a team.",
      image: "/old.svg",
      githubUrl: "https://github.com/BirdyArt/portfolio",
      demoUrl: "https://portfolio-old.azurewebsites.net/",
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
        scrollSnapAlign: "start",
      }}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        onViewportEnter={() => setCurrentPage("works")}
        viewport={{ amount: 0.7 }}
        style={{ overflow: "scroll" }}
      >
        <motion.div variants={aboutMe}>
          <Grid
            container
            spacing={4}
            sx={{
              my: { xs: 10, lg: 0 },
              width: "inherit",
              mr: { xs: 4, sm: 8, md: 10, lg: `calc(96px + 10vw)` },
              ml: { xs: 0, sm: 4, md: 10, lg: 18 },
            }}
          >
            {works.map((work) => (
              <Grid item xs={12} md={6}>
                <WorksCard
                  title={work.title}
                  description={work.description}
                  image={work.image}
                  githubUrl={work.githubUrl}
                  demoUrl={work.demoUrl}
                />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Works;
