import { Box } from "@mui/material";
import React from "react";

export const Sidebar = () => {
  return (
    <Box
      bgcolor={"skyblue"}
      flex={1}
      sx={{ display: { xs: "none", sm: "block" } }}
      p={2}
    >
      Sidebar
    </Box>
  );
};
