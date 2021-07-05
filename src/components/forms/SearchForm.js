import React, { Component } from "react";

export default function SearchForm({ onSearchChange }) {
  return (
    <form>
      <div className="form-group">
        <label>Search</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter pattern"
          name="searchPattern"
          onChange={(e) => onSearchChange(e)}
        />
      </div>
    </form>
  );
}
