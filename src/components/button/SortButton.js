import React, { Component } from "react";

export default class SortButton extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Sorting:</label>

        <button
          type="button"
          id="filterButton"
          class="filterButton"
          onClick={this.props.sortingHandler}
        >
          {this.props.sortButtonText}
        </button>
      </div>
    );
  }
}
