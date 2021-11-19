import React from "react";
import { Grid, Box } from "@mui/material";
import ContentCard from "./ContentCard";
import dummyData from "./sampleData.json";

const DUMMY_DATA = dummyData.articles;

const ContentGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {DUMMY_DATA.map((article, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ContentCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentGrid;
