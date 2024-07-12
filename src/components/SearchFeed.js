import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { SearchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${SearchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [SearchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" foreweight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{SearchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
