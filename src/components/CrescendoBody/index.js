import React, { useState } from "react";
import "./crestyle.css";
import CrescendoCard from "../CrescendoCard";
import { cardsday1, cardsday2, cardsday3 } from "../../utils/crscards";

const Index = () => {
  const days = ["day1", "day2", "day3"];
  const [active, setActive] = useState(days[0]);
  const reverse = false;
  return (
    <div className="crs-main-wrapper">
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
            if (key & 1)
              return (
                <CrescendoCard
                  key={key}
                  reverse={!reverse}
                  title={item.title}
                  content={item.content}
                />
              );
            return (
              <CrescendoCard
                key={key}
                reverse={reverse}
                title={item.title}
                content={item.content}
              />
            );
          })}
        {active == days[1] &&
          cardsday2.map((item, key) => {
            if (key & 1)
              return (
                <CrescendoCard
                  key={key}
                  reverse={!reverse}
                  title={item.title}
                  content={item.content}
                />
              );
            return (
              <CrescendoCard
                key={key}
                reverse={reverse}
                title={item.title}
                content={item.content}
              />
            );
          })}
        {active == days[2] &&
          cardsday3.map((item, key) => {
            if (key & 1)
              return (
                <CrescendoCard
                  key={key}
                  reverse={!reverse}
                  title={item.title}
                  content={item.content}
                />
              );
            return (
              <CrescendoCard
                key={key}
                reverse={reverse}
                title={item.title}
                content={item.content}
                img={item.img}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Index;
