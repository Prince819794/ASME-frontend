import React, { useState } from "react";
import "./crestyle.css";
import CrescendoCard from "../CrescendoCard";
import { cardsday1, cardsday2, cardsday3 } from "../../utils/crscards";
import comma from "../../assets/comma.svg";

const Index = () => {
  const days = ["day1", "day2", "day3"];
  const [active, setActive] = useState(days[0]);
  const reverse = 1;
  return (
    <div className="crs-main-wrapper">
      <img className="comma" src={comma} alt="" />
      <div className="crs-event-header">
        <div className="ev-f-head">Events</div>
        <div className="ev-head">Events</div>
      </div>
      <div className="crs-days">
        {days.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setActive(item)}
              className={`${active == item && "active"}`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="crs-main-content">
        {active == days[0] &&
          cardsday1.map((item, key) => {
            return (
              <CrescendoCard
                key={key}
                reverse={reverse ^ (key & 1)}
                {...item}
              />
            );
          })}
        {active == days[1] &&
          cardsday2.map((item, key) => {
            return (
              <CrescendoCard
                key={key}
                reverse={reverse ^ (key & 1)}
                {...item}
              />
            );
          })}
        {active == days[2] &&
          cardsday3.map((item, key) => {
            return (
              <CrescendoCard
                key={key}
                reverse={reverse ^ (key & 1)}
                {...item}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Index;
