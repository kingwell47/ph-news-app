import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Skeleton } from "@mui/material";
import ContentCard from "./ContentCard";

require("dotenv").config();

const api = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
});

const ContentGrid = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let data = await api
        .get("/", {
          params: {
            country: "ph",
            category,
            apiKey: process.env.REACT_APP_NEWS_API_KEY,
          },
        })
        .then(({ data }) => data)
        .catch((err) => console.log(err));
      if (data.status === "ok") {
        setArticles(data.articles);
        setLoading(false);
      } else if (data.status === "error") {
        console.log(data.code, data.message);
      }
    };

    getData();
  }, [category]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 10, md: 16 }}
      >
        {(loading ? Array.from(new Array(16)) : articles).map(
          (article, index) => (
            <Grid item xs={4} sm={5} md={4} key={index}>
              {loading ? (
                <Skeleton variant="rectangular" maxWidth={400} height={300} />
              ) : (
                <ContentCard article={article} />
              )}
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default ContentGrid;
