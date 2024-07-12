import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const navigate = useNavigate();

  const [SearchTerm, SetSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (SearchTerm) {
    navigate(`/search/${SearchTerm}`);

    // SetSearchTerm("");
  }

  const handleSearch = (e) => {
    SetSearchTerm(e?.target?.value);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "none",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="Search-bar"
        placeholder="Search..."
        value={SearchTerm}
        onChange={(e) => {
          console.log("e ::::::: ", e.target.value);
          handleSearch(e);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
