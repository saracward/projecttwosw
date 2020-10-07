import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import AllVenues from "./AllVenues";
import MyFaves from "./MyFaves";
import EventDetails from "./EventDetails";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [venues, setVenues] = React.useState([]);
  const [selectedEvent, setSelectedEvent] = React.useState();
  const [locale, setLocale] = useState("*");
  const newLocale = (newL) => {
    setLocale(newL);
  };
  // const [searchField, setSearchField] = React.useState([]);

  // const { venues, searchField } = this.state;
  // const filteredVenues = venues.filter();

  const selectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>
          Home
          {/* <SearchBox
            placeholder="Enter Your City"
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          /> */}
        </Link>

        <Link to="/MyFaves" style={{ textDecoration: "none", color: "white" }}>
          My Faves
        </Link>

        <Link
          to="/allVenues"
          style={{ textDecoration: "none", color: "white" }}
        >
          All Venues
        </Link>
      </header>

      {/* <h1>Hello Landing Page</h1> */}
      <Switch>
        <Route
          exact={true}
          path="/Home"
          render={(rp) => <Home {...rp} newLocale={newLocale} />}
        />

        <Route exact={true} path="/MyFaves">
          <MyFaves />
        </Route>

        <Route exact={true} path="/allVenues">
          <AllVenues selectEvent={selectEvent} locale={locale} />
        </Route>

        <Route
          path="/Event/:name"
          render={(rp) => <EventDetails {...rp} event={selectedEvent} />}
        />
      </Switch>
    </div>
  );
}

export default App;
