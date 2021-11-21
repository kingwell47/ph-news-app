import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box } from "@mui/material";
import ContentCard from "./ContentCard";

require("dotenv").config();

const api = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
});

const ContentGrid = () => {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    let data = await api
      .get("/", {
        params: {
          country: "ph",
          apiKey: process.env.REACT_APP_NEWS_API_KEY,
        },
      })
      .then(({ data }) => data)
      .catch((err) => console.log(err));
    setArticles(data.articles);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 10, md: 16 }}
      >
        {articles.map((article, index) => (
          <Grid item xs={4} sm={5} md={4} key={index}>
            <ContentCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentGrid;
