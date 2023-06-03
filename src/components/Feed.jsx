import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="data:image/jpeg;base64,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"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
