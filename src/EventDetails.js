import React from "react";
import { Link, Route } from "react-router-dom";

function EventDetails(props) {
  const { event } = props;

  return (
    <div className="eventDetails">
      {event ? (
        <img
          className="venueImage"
          src={
            event.images
              ? event.images[0].url
              : "data:image/jpeg;base64,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"
          }
        />
      ) : (
        "...loading"
      )}
      <br />
      <h2>{event ? event.name : "...loading"}</h2>
      <br />
      Address: {event ? event.address.line1 : ""}
      <br />
      {event ? event.city.name : ""},{" "}
      {event && event.state ? event.state.name : props.locale}
      <br />
      <br />
      Parking Detail: {event ? event.parkingDetail : ""}
      <br />
      <br />
      <Route to="event.url">
        <Link to="event.url">{event && event ? event.url : ""}</Link>
      </Route>
      <br />
      <br />
      General Info:{" "}
      {event && event.gerealInfo ? event.generalInfo.generalRule : ""}
      <br />
      <br />
      <button
        onClick={() => {
          props.newFave(event);
        }}
        className="addToFaves"
      >
        <img src="https://e7.pngegg.com/pngimages/665/75/png-clipart-heart-computer-icons-like-button-instagram-instagram-heart-love-food.png" />
      </button>
    </div>
  );
}

export default EventDetails;
