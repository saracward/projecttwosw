import React from "react";
import { Link, Route } from "react-router-dom";

function EventDetails(props) {
  const { event } = props;

  return (
    <div className="eventDetails">
      {/* {event ? event.images[0].url : "...loading"} */}
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
      <Link to="event.url">{event ? event.url : ""}</Link>
      <br />
      <br />
      General Info: {event ? event.generalInfo.generalRule : ""}
      <br />
      <br />
      <button>Add to Favorites</button>
    </div>
  );
}

export default EventDetails;
