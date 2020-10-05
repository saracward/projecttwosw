import React, { useState, useEffect } from "react";

function AllVenues() {
  console.log("rendering all the venues");

  // const ListVenues = (props) => {
  const url =
    "https://app.ticketmaster.com/discovery/v2/venues?apikey=4Z9TkEymjwvhSSqYhg0j7LgpNIVTgahG&locale=*";
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const theVenues = data._embedded.venues;
        setVenues(theVenues);
      });
  }, []);
  console.log(venues);
  return venues.length === 0 ? (
    <h1> Loading... </h1>
  ) : (
    venues.map((venue, index) => {
      return <h1 key={index}>{venue.name}</h1>;
    })
  );
}
export default AllVenues;
