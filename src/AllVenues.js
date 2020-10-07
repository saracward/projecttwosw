import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import EventDetails from "/EventDetails";

function AllVenues(props) {
  console.log("rendering all the venues");

  // const ListVenues = (props) => {
  const url =
    "https://app.ticketmaster.com/discovery/v2/venues?apikey=4Z9TkEymjwvhSSqYhg0j7LgpNIVTgahG&locale=";
  const [venues, setVenues] = useState([]);
  const { locale } = props;

  useEffect(() => {
    fetch(url + locale)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const theVenues = data._embedded.venues;
        setVenues(theVenues);
      });
  }, [locale]);

  console.log(venues);
  return venues.length === 0 ? (
    <h3> Loading... </h3>
  ) : (
    venues.map((venue, index) => {
      return (
        <div className="allTheVenues" key={index}>
          <p
            onClick={() => {
              props.selectEvent(venue);
            }}
          >
            <Link to={"/Event/" + venue.name}>
              <h2>{venue.name}</h2>
            </Link>
            {""}
          </p>
        </div>
      );
    })
  );
}

export default AllVenues;
