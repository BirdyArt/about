import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { GithubLogo, Play } from "@phosphor-icons/react";

type WorksCardProps = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
};

const WorksCard = ({
  title,
  description,
  image,
  githubUrl,
  demoUrl,
}: WorksCardProps) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        pt={4}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <CardMedia
          sx={{ maxHeight: 160, objectFit: "contain" }}
          component="img"
          image={image}
          title="birdy task app"
        />
        <Typography
          fontFamily={"staatliches"}
          fontSize={52}
          lineHeight={"40px"}
          fontWeight={600}
          pt={2}
          textAlign={"center"}
        >
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body1" mt={1}>
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ marginBottom: 1, marginX: 1 }}>
        {githubUrl ? (
          <Button
            fullWidth
            startIcon={<GithubLogo />}
            href={githubUrl}
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
        ) : null}
        {demoUrl ? (
          <Button
            fullWidth
            startIcon={<Play />}
            href={demoUrl}
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
        ) : null}
      </CardActions>
    </Card>
  );
};

export default WorksCard;
