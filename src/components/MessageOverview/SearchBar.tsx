import React from 'react'
import { Search } from 'react-feather'

export const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <div className="logo-icon">T</div>
        <div className="app-name">Telegraph</div>
        <div className="search-icon-container">
          <Search />
          <div className="tooltip">Search</div>
        </div>
      </div>
    </div>
  )
}
