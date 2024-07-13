import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const navigate = useNavigate();

  const [SearchTerm, SetSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (SearchTerm) {
      navigate(`/search/${SearchTerm}`);

      SetSearchTerm("");
    }
  };

  // const handleSearch = (e) => {
  //   SetSearchTerm(e?.target?.value);
  // };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="SearchBar"
        placeholder="Search..."
        value={SearchTerm}
        onChange={(e) => SetSearchTerm(e.target.value)}
      />

      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
