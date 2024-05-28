import { Box, Grid, Typography } from "@mui/material";
import WorksCard from "./WorksCard";

const Works = () => {
  const works = [
    {
      title: "Birdy Task",
      description:
        "Task scheduler full-stack app build with ChakraUI, NestJS and Prisma and deployed to Azure Container App using CI/CD. Users can signup/login, CRUD tasks, and use nice drag and drop feature.",
      image: "/logo.svg",
      githubUrl: "https://github.com/BirdyArt/BirdyTask",
      demoUrl: "https://birdy-task.azurewebsites.net/",
    },
    {
      title: "Boilerplate",
      description:
        "Modern frontend boilerplate with extensive testing (unit tests with Vitest, component tests using Playwright in three major browsers, all working perfectly in CI/CD), Storybook and fully containerized.",
      image: "/birdyart.svg",
      githubUrl: "https://github.com/BirdyArt/template",
      demoUrl: "",
    },
    {
      title: "Portfolio",
      description:
        "Task scheduler full-stack app build with ChakraUI, NestJS and Prisma and deployed to Azure Container App using CI/CD. Users can signup/login, CRUD tasks, and use nice drag and drop feature.",
      image: "/birdyart.svg",
      githubUrl: "https://github.com/BirdyArt/about",
      demoUrl: "",
    },
    {
      title: "Old works",
      description:
        "Task scheduler full-stack app build with ChakraUI, NestJS and Prisma and deployed to Azure Container App using CI/CD. Users can signup/login, CRUD tasks, and use nice drag and drop feature.",
      image: "/birdyart.svg",
      githubUrl: "https://github.com/BirdyArt/portfolio",
      demoUrl: "",
    },
  ];

  return (
    <Box
      height={window.innerHeight}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#F5F5F5"}
      px={32}
    >
      <Box>
        <Typography variant="h4" fontWeight={300} textAlign={"center"} mb={2}>
          Works
        </Typography>
        <Grid container spacing={2}>
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