import { AppBar, Toolbar, Typography } from "@mui/material";

const AppBarTop = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#F5F5F5",
        boxShadow: "none",
        paddingX: { xs: 2, md: 32 },
        paddingTop: { xs: 2, md: 16 },
      }}
    >
      <Toolbar>
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
