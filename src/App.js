import { HashRouter, Router, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  <HashRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Router>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/Channel/:id" exact element={<ChannelDetail />} />
        <Route path="/Search/:SearchTerm" exact element={<SearchFeed />} />
      </Router>
    </Box>
  </HashRouter>;
};

export default App;
