import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";
import { useState } from "react";

function App() {
  // const BlueButton = styled(Button)(({ theme }) => ({
  //   backgroundColor: "skyblue",
  //   color: "#888",
  //   margin: 5,
  //   "&:hover": {
  //     backgroundColor: "lightblue",
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //     color: "white",
  //   },
  // }));
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

// {
//   /* <Button variant="text">Text</Button>
//       <Button
//         startIcon={<Settings />}
//         variant="contained"
//         color="secondary"
//         size="small"
//       >
//         Setting
//       </Button>
//       <Button
//         startIcon={<Add />}
//         variant="contained"
//         color="success"
//         size="small"
//       >
//         Add New Post
//       </Button>
//       <Button variant="outlined">Outlined</Button>
//       <Typography variant="h1" component="p">
//         hello world
//       </Typography>
//       <BlueButton variant="contained">
//         my Button
//       </BlueButton>
//       <BlueButton>another btn</BlueButton> */
// }
export default App;
