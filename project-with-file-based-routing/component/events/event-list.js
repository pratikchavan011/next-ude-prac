import React from "react";
import EventItem from "./event-item";
import classes from './event-list.module.css'

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item, index) => (
        <EventItem
          key={index}
          title={item.title}
          date={item.date}
          id={item.id}
          image={item.image}
          location={item.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
