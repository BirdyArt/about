import { AppBar, Toolbar, Typography } from "@mui/material";

const AppBarTop = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#F7F7F7",
        boxShadow: "none",
        px: { xs: 2, md: 24, lg: 32, xl: 48 },
        paddingTop: { xs: 2, md: 16 },
      }}
    >
      <Toolbar sx={{ px: "0 !important" }}>
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
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTop;
