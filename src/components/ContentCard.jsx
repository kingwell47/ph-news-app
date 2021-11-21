import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import reptile from "../images/contemplative-reptile.jpg";

const ContentCard = ({ article }) => {
  const { author, title, description, url, urlToImage } = article;
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="250"
        image={urlToImage ? urlToImage : reptile}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body3" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <br />
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button href={url} target="_blank" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
