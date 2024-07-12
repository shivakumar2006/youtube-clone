import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const { SearchTerm, SetSearchTerm } = useState("");

  const navigate = useNavigate;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (searchTerm) {
    navigate(`/search/${searchTerm}`);

    SetSearchTerm("");
  }

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
          e.target.value;
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
