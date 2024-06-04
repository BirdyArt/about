import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { JackInTheBox } from "react-awesome-reveal";

const AppBarTop = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#F7F7F7",
        boxShadow: "none",
        px: { xs: 2, md: 24 },
        paddingTop: { xs: 2, md: 16 },
      }}
    >
      <Toolbar sx={{ px: "0 !important" }}>
        <Box width={{ xs: "100%", md: "auto" }}>
          <JackInTheBox triggerOnce>
            <Typography
              fontFamily={"staatliches"}
              width={"100%"}
              fontSize={52}
              lineHeight={"40px"}
              fontWeight={600}
              pt={2}
              textAlign={{ xs: "center", md: "left" }}
              color="black"
            >
              Artem Sobolev
            </Typography>
          </JackInTheBox>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTop;
