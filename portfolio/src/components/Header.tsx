import {
  AppBar,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Circle } from "@phosphor-icons/react";

const Header = ({ currentPage }: { currentPage: string }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const labels = ["about me", "tools", "careers", "works"];

  const children = labels.map((page) => (
    <ToggleButton
      value={page}
      disableRipple
      key={page}
      sx={{
        border: "none",
        padding: 0,
        borderRadius: "50% !important",
        marginX: 1,
        backgroundColor: "transparent !important",
        cursor: "unset",
      }}
    >
      <Circle
        size={desktop ? "1.5vw" : "3vh"}
        weight={page === currentPage ? "fill" : "bold"}
        color="black"
      />
    </ToggleButton>
  ));

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        pt: 2,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          elevation: 0,
        }}
      >
        <Typography
          fontFamily={"staatliches"}
          width={"100%"}
          fontSize={desktop ? "4vw" : "6vh"}
          fontWeight={600}
          color="black"
          ml={2}
        >
          {currentPage}
        </Typography>
        <Box sx={{ mr: desktop ? "50%" : 2 }}>
          <ToggleButtonGroup
            size="large"
            value={currentPage}
            aria-label="Page navigation"
          >
            {children}
          </ToggleButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
