import { Box } from "@mui/system";
import React from "react";

export const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }} p={2}>
      <Box position={"fixed"}>Hello</Box>
      
    </Box>
  );
};
