import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { GithubLogo, Play } from "@phosphor-icons/react";

const Works = () => {
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
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <Box px={6} pt={4}>
                <CardMedia
                  component="img"
                  image="/logo.svg"
                  title="birdy task app"
                />
              </Box>
              <CardContent>
                <Typography
                  fontFamily={"staatliches"}
                  fontSize={52}
                  lineHeight={"40px"}
                  fontWeight={600}
                  pt={1}
                  pb={2}
                  textAlign={"center"}
                >
                  BIRDY TASK
                </Typography>
                <Typography variant="body1" mt={1}>
                  Task scheduler full-stack app build with ChakraUI, NestJS and
                  Prisma and deployed to Azure Container App using CI/CD. Users
                  can signup/login, CRUD tasks, and use nice drag and drop
                  feature.
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: 1, marginX: 1 }}>
                <Button
                  fullWidth
                  startIcon={<GithubLogo />}
                  href="https://github.com/BirdyArt/BirdyTask"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Github
                </Button>
                <Button
                  fullWidth
                  startIcon={<Play />}
                  href="https://birdy-task.azurewebsites.net/"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <Box px={6} pt={4}>
                <CardMedia
                  component="img"
                  image="/logo.svg"
                  title="birdy task app"
                />
              </Box>
              <CardContent>
                <Typography
                  fontFamily={"staatliches"}
                  fontSize={52}
                  lineHeight={"40px"}
                  fontWeight={600}
                  pt={1}
                  pb={2}
                  textAlign={"center"}
                >
                  BIRDY TASK
                </Typography>
                <Typography variant="body1" mt={1}>
                  Task scheduler full-stack app build with ChakraUI, NestJS and
                  Prisma and deployed to Azure Container App using CI/CD. Users
                  can signup/login, CRUD tasks, and use nice drag and drop
                  feature.
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: 1, marginX: 1 }}>
                <Button
                  fullWidth
                  startIcon={<GithubLogo />}
                  href="https://github.com/BirdyArt/BirdyTask"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Github
                </Button>
                <Button
                  fullWidth
                  startIcon={<Play />}
                  href="https://birdy-task.azurewebsites.net/"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <Box px={6} pt={4}>
                <CardMedia
                  component="img"
                  image="/logo.svg"
                  title="birdy task app"
                />
              </Box>
              <CardContent>
                <Typography
                  fontFamily={"staatliches"}
                  fontSize={52}
                  lineHeight={"40px"}
                  fontWeight={600}
                  pt={1}
                  pb={2}
                  textAlign={"center"}
                >
                  BIRDY TASK
                </Typography>
                <Typography variant="body1" mt={1}>
                  Task scheduler full-stack app build with ChakraUI, NestJS and
                  Prisma and deployed to Azure Container App using CI/CD. Users
                  can signup/login, CRUD tasks, and use nice drag and drop
                  feature.
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: 1, marginX: 1 }}>
                <Button
                  fullWidth
                  startIcon={<GithubLogo />}
                  href="https://github.com/BirdyArt/BirdyTask"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Github
                </Button>
                <Button
                  fullWidth
                  startIcon={<Play />}
                  href="https://birdy-task.azurewebsites.net/"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <Box px={6} pt={4}>
                <CardMedia
                  component="img"
                  image="/logo.svg"
                  title="birdy task app"
                />
              </Box>
              <CardContent>
                <Typography
                  fontFamily={"staatliches"}
                  fontSize={52}
                  lineHeight={"40px"}
                  fontWeight={600}
                  pt={1}
                  pb={2}
                  textAlign={"center"}
                >
                  BIRDY TASK
                </Typography>
                <Typography variant="body1" mt={1}>
                  Task scheduler full-stack app build with ChakraUI, NestJS and
                  Prisma and deployed to Azure Container App using CI/CD. Users
                  can signup/login, CRUD tasks, and use nice drag and drop
                  feature.
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: 1, marginX: 1 }}>
                <Button
                  fullWidth
                  startIcon={<GithubLogo />}
                  href="https://github.com/BirdyArt/BirdyTask"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Github
                </Button>
                <Button
                  fullWidth
                  startIcon={<Play />}
                  href="https://birdy-task.azurewebsites.net/"
                  target="_blank"
                  sx={{
                    color: "white",
                    bgcolor: "#333",
                    "&:hover": {
                      backgroundColor: "text.secondary",
                    },
                  }}
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Works;
