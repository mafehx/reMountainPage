import React from "react";
import LogginForm from "../forms/LogginForm";
import SearchForm from "../forms/SearchForm";

import LinkBox from "../links/LinkBox";
import NavMenu from "../nav/NavMenu";
import SortButton from "../button/SortButton";
import GetOneCardButton from "../button/GetOneCardButton";

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="leftMenu">
        <LinkBox cardsData={this.props.cardsData} />
      </div>
    );
  }
}

export default LeftMenu;
