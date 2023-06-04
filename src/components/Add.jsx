import {
  Box,
  Modal,
  Fab,
  Tooltip,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
} from "@mui/material";
import { Add as AddIcon, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import React, { useState } from "react";
import { grey } from "@mui/material/colors";

export const Add = () => {
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color={grey} textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>

          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};