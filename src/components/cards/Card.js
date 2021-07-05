import React from "react";

export default function Card({ cardData }) {
  return (
    <a className="card" style={{ backgroundImage: `url(${cardData.imgLink})` }}>
      <div className="inner">
        <h3 className="title">
          {cardData.name} - {cardData.place}
        </h3>
        <hr />
        <h4 className="subtitle">
          {cardData.continent} - {cardData.altitude_depth} m
        </h4>

        {/* <p className="subtitle">{cardData.altitude_depth} m</p>
        <p className="comment">{cardData.comment} m</p> */}
      </div>
    </a>
  );
}
