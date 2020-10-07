import React from "react";
import { Link, Route } from "react-router-dom";

function EventDetails(props) {
  const { event } = props;

  return (
    <div className="eventDetails">
      {event ? <img src={event.images[0].url} /> : "...loading"}
      <br />
      <h2>{event ? event.name : "...loading"}</h2>
      <br />
      Address: {event ? event.address.line1 : ""}
      <br />
      {event ? event.city.name : ""}, {event ? event.state.name : ""}
      <br />
      <br />
      Parking Detail: {event ? event.parkingDetail : ""}
      <br />
      <br />
      <Route to="event.url">
        <Link to="event.url">{event ? event.url : ""}</Link>
      </Route>
      <br />
      <br />
      General Info: {event ? event.generalInfo.generalRule : ""}
      <br />
      <br />
      <button className="addToFaves">
        <img src="https://e7.pngegg.com/pngimages/665/75/png-clipart-heart-computer-icons-like-button-instagram-instagram-heart-love-food.png" />
      </button>
    </div>
  );
}

export default EventDetails;
