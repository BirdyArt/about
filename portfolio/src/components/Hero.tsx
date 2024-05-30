import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      height={{
        xs: `calc(${window.innerHeight}px - 72px)`,
        md: `calc(${window.innerHeight}px - 192px)`,
      }}
      minHeight={{ xs: "100%", md: "auto" }}
      display={{ xs: "flex", md: "flex" }}
      alignItems={"center"}
      textAlign={{ xs: "center", md: "left" }}
      justifyContent={"center"}
      px={{ xs: 2, md: 24, lg: 32, xl: 48 }}
    >
      <Box display={{ xs: "block", md: "flex" }} alignItems={"center"}>
        <Box mr={{ xs: 0, md: 4 }}>
          <Typography
            sx={{ typography: { xs: "h5", md: "h4" } }}
            fontWeight={300}
          >
            Hi, I am a software developer based in Vancouver, Canada.
          </Typography>
          <Typography
            sx={{
              typography: { xs: "body1", md: "h6" },
              fontWeight: { xs: "400", md: "300 !important" },
            }}
            py={{ xs: 2, md: 0 }}
          >
            Over the years I developed a skill set in a range of technologies
            and frameworks. I really value clean and readable code. Also I'm
            very passionate about UX / UI.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/me.jpg"
          alt="Artem Sobolev"
          sx={{
            filter: "grayscale(100%)",
            maxWidth: { xs: "250px", md: "300px" },
            padding: "10px",
            border: "20px solid #0000",
            outline: "1px solid #000000",
            outlineOffset: "-10px",
            background:
              "conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
