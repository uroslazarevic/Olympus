import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search here people or pages..." />
        <span className="search-icon">
          <i className="fas fa-search" />
        </span>
      </div>
    );
  }
}
