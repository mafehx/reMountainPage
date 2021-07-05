import React, { useState, useEffect } from "react";
import _ from "lodash";
import { allDocsListenerQuery } from "../api/allDocsListenerQuery";
import { addDocMutation } from "../api/addDocMutation";
import placeholderImage from "../assets/images/background.PNG";

import CardsContent from "../components/cards/CardsContent";
import LeftMenu from "../components/menus/LeftMenu";
import FilterMenu from "../components/menus/FilterMenu";
import MainLayout from "../layouts/MainLayout";
import { sorting } from "../helperFunctions/helperFunctions";

export default function SeePlaces() {
  const [initialCardsData, setInitialCardsData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [contentVisible, setcontentVisible] = useState(true);
  const [sorting, setsorting] = useState("desc");
  const [sortButtonText, setsortButtonText] = useState("Highest");
  const [searchPattern, setsearchPattern] = useState("");

  useEffect(() => {
    allDocsListenerQuery(setCardsData, setInitialCardsData);
  }, []);

  function contentVisibleHandler() {
    setcontentVisible(true);
  }

  function onSearchChange(e) {
    let output = [];
    initialCardsData.forEach((element) => {
      if (element.searchString.includes(e.target.value.toLowerCase())) {
        output.push(element);
      }
    });

    setCardsData(output);
  }

  // function sortingHandler() {
  //   let order = sorting === "desc" ? "asc" : "desc";
  //   let buttonText = sortButtonText === "Highest" ? "Lowest" : "Highest";
  //   setCardsData(sorting(cardsData, order));
  //   setsorting(order);
  //   setsortButtonText(buttonText);
  // }

  return (
    <MainLayout pageName="SHARE YOUR FAVORITE SPOT ON EARTH">
      <FilterMenu
        contentVisibleHandler={contentVisibleHandler}
        // sortingHandler={sortingHandler}
        // sortButtonText={sortButtonText}
        onSearchChange={onSearchChange}
      />

      {contentVisible && (
        <div className="cardsContent">
          <CardsContent cardsData={cardsData} />{" "}
        </div>
      )}
      {cardsData.length === 0 && (
        <div className="placeHolder">
          <img src={placeholderImage} className="placeHolderImage"></img>
        </div>
      )}
    </MainLayout>
  );
}
