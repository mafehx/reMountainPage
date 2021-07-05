import React, { Component } from "react";

import SortButton from "../button/SortButton";
import GetOneCardButton from "../button/GetOneCardButton";
import LogginForm from "../forms/LogginForm";
import SearchForm from "../forms/SearchForm";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";

export default function FilterMenu({ onSearchChange }) {
  return (
    <div class="filterMenu">
      {/* <LogginForm contentVisibleHandler={this.props.contentVisibleHandler} /> */}
      <SearchForm onSearchChange={onSearchChange} />
      {/* <SortButton
          sortingHandler={this.props.sortingHandler}
          sortButtonText={this.props.sortButtonText}
        /> */}
      {/* <GetOneCardButton
          rndCardHandler={this.props.rndCardHandler}
          rndGetButtonText={this.props.rndGetButtonText}
        /> */}
    </div>
  );
}
