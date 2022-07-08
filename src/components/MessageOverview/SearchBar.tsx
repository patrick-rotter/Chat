import React from "react";
import { Search } from "react-feather"

interface Props {}

export const SearchBar: React.FC<Props> = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <div className="logo-icon">W</div>
        <div className="app-name">WhatsApp</div>
        <Search />
      </div>
    </div>
  );
};
