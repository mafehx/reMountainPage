import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function CardsContent({ cardsData }) {
  return (
    <div>
      {cardsData.length > 0 && (
        <div
          style={{ flexDirection: "column", justifyContent: "space-around" }}
        >
          <div className="cards">
            {cardsData.map((cardData) => {
              return <Card cardData={cardData} />;
            })}
          </div>
          <hr />
        </div>
      )}
    </div>
  );
}
