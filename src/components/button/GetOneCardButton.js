import React, { Component } from "react";

export default class GetOneCardButton extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Get Random Card:</label>

        <button
          type="button"
          id="filterButton"
          class="filterButton"
          onClick={this.props.rndCardHandler}
        >
          {this.props.rndGetButtonText}
        </button>
      </div>
    );
  }
}
