import { AppBar, Toolbar, Typography } from "@mui/material";

const AppBarTop = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#F5F5F5",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h3" color="#000000" fontWeight={300}>
          Artem Sobolev
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTop;
