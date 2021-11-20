import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ContentCard = ({ article }) => {
  const { author, title, description, url, urlToImage } = article;
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
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
      </CardActionArea>
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
