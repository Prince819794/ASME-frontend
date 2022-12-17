import React from "react";
import "./events.css";
import Card from "../EventCard";

const Events = () => {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="events">
      <div className="ev-f-head">Events</div>
      <div className="ev-head">Events</div>
      <div className="ev-card-wrapper">
        {elements.map(() => {
          return <Card />;
        })}
      </div>
    </div>
  );
};

export default Events;
