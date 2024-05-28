import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      height={`calc(${window.innerHeight}px - 192px)`}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"#F5F5F5"}
      px={32}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box width={"520px"} mr={4}>
          <Typography variant="h4" fontWeight={300}>
            Hi, I am a software developer based in Vancouver, Canada.
          </Typography>
          <Typography variant="h6" fontWeight={300}>
            Over the years I developed a skill set in a range of technologies
            and frameworks. I really value clean and readable code. Also I'm
            very passionate about UX / UI.
          </Typography>
        </Box>
        <Box width={"300px"}>
          <img
            src="/me.jpg"
            alt="Artem Sobolev"
            width={"100%"}
            style={{
              filter: "grayscale(100%)",
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
