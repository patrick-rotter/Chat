import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface Props {}

export const SearchBar: React.FC<Props> = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <div className="logo-icon">W</div>
        <div className="app-name">WhatsApp</div>
        <SearchIcon className="search-icon"/>
      </div>
    </div>
  );
};
