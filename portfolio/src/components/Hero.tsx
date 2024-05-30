import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      height={{
        xs: `calc(${window.innerHeight}px - 100px)`,
        md: `calc(${window.innerHeight}px - 192px)`,
      }}
      display={{ xs: "block", md: "flex" }}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"#F5F5F5"}
      px={{ xs: 2, md: 32 }}
    >
      <Box display={{ xs: "block", md: "flex" }} alignItems={"center"}>
        <Box maxWidth={"520px"} mr={{ xs: 0, md: 4 }}>
          <Typography variant="h4" fontWeight={300}>
            Hi, I am a software developer based in Vancouver, Canada.
          </Typography>
          <Typography variant="h6" fontWeight={300}>
            Over the years I developed a skill set in a range of technologies
            and frameworks. I really value clean and readable code. Also I'm
            very passionate about UX / UI.
          </Typography>
        </Box>
        <Box maxWidth={"520px"}>
          <img
            src="/me.jpg"
            alt="Artem Sobolev"
            style={{
              filter: "grayscale(100%)",
              maxWidth: "300px",
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
    </Box>
  );
};

export default Hero;
