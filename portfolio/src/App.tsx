import { Box } from "@mui/material";
import InitialTransition from "./components/InitialTransition";
import Main from "./components/Main";

function App() {
  return (
    <Box bgcolor={"#F7F7F7"}>
      <InitialTransition />
      <Main />
    </Box>
  );
}
export default App;
