import React, { Component } from "react";

export default class LinkBox extends Component {
  render() {
    return (
      <div>
        {this.props.cardsData.map((groupData) => {
          let groupName = groupData.abbr;
          return (
            <nav className="leftNav" id="leftNav">
              <h3>{groupData.title}</h3>
              <ul>
                {groupData.data.map((cardData) => {
                  return (
                    <li id={`${groupName}List`}>
                      <a href={`#${groupName}${cardData.name2}`}>
                        {`${cardData.name2} - ${cardData.name1}`}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          );
        })}
      </div>
    );
  }
}
