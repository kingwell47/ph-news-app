import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Skeleton } from "@mui/material";
import ContentCard from "./ContentCard";

require("dotenv").config();

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const ContentGrid = ({ category, topic }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (!topic) {
        await api
          .get("/top-headlines", {
            params: {
              country: "ph",
              category,
              apiKey: process.env.REACT_APP_NEWS_API_KEY,
            },
          })
          .then(({ data }) => {
            if (data.status === "ok") {
              setArticles(data.articles);
              setLoading(false);
            } else if (data.status === "error") {
              console.log(data.code, data.message);
            }
          })
          .catch((err) => console.log(err));
      } else if (topic) {
        await api
          .get("/everything", {
            params: {
              q: topic,
              apiKey: process.env.REACT_APP_NEWS_API_KEY,
            },
          })
          .then(({ data }) => {
            if (data.status === "ok") {
              setArticles(data.articles);
              setLoading(false);
            } else if (data.status === "error") {
              console.log(data.code, data.message);
            }
          })
          .catch((err) => console.log(err));
      }
    };

    getData();
  }, [category, topic]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {(loading ? Array.from(new Array(12)) : articles).map(
          (article, index) => (
            <Grid item xs={4} sm={3} md={3} key={index}>
              {loading ? (
                <Skeleton variant="rectangular" width={300} height={300} />
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
