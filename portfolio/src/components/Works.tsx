import { Box, Grid, Typography } from "@mui/material";
import WorksCard from "./WorksCard";

const Works = () => {
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
        "Modern frontend boilerplate with extensive testing (unit tests with Vitest, component tests using Playwright in three major browsers, all working perfectly in CI/CD), Storybook and fully containerized.",
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
      demoUrl: "https://portfolio-artem.azurewebsites.net/",
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
      height={"100%"}
      display={{ xs: "block", md: "flex" }}
      justifyContent={"center"}
      alignItems={"center"}
      px={{ xs: 4, md: 24 }}
      pb={4}
    >
      <Box>
        <Typography
          fontFamily={"staatliches"}
          fontSize={32}
          lineHeight={"40px"}
          fontWeight={600}
          pb={4}
          pt={4}
          textAlign={"center"}
          color="black"
        >
          Works
        </Typography>
        <Grid container spacing={4}>
          {works.map((work) => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
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
      </Box>
    </Box>
  );
};

export default Works;
