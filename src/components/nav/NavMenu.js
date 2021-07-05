import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import StarIcon from "@material-ui/icons/Star";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import InfoIcon from "@material-ui/icons/Info";

const linkStyle = {
  textDecoration: "none",
  color: "#000000",
  cursor: "pointer",
};

export default class NavMenu extends Component {
  render() {
    return (
      <List>
        <ListSubheader inset></ListSubheader>
        <Link to={"/"} className="pageLink" style={linkStyle}>
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Spots" />
          </ListItem>
        </Link>
        <Link to={"/addPlace"} className="pageLink" style={linkStyle}>
          <ListItem button>
            <ListItemIcon>
              <PlusOneIcon />
            </ListItemIcon>
            <ListItemText primary="Add a Spot" />
          </ListItem>
        </Link>
        <Link to={"/about"} className="pageLink" style={linkStyle}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    );
  }
}
