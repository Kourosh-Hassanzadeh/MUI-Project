import {
  AppBar,
  Button,
  Container,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
import { Navbar } from "./components/Navbar";
function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
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
