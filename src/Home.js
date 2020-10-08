import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

function Home(props) {
  console.log("rendering home");
  const [form, setForm] = useState({ citySearch: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    props.newLocale(form.citySearch);
    props.history.push("/allVenues");
  };

  return (
    <div className="Home">
      <div className="words">
        <h1>Find Your Venue by State Code</h1>
        <br />
        <FormGroup>
          <Label for="citySearch"></Label>
          <Input
            type="text"
            name="citySearch"
            id="citySearch"
            onChange={handleChange}
            placeholder="Enter Your State"
          />
        </FormGroup>
        <Button className="letsGo" onClick={handleClick}>
          Lets go
        </Button>
        {/* </Form> */}
        {/* {SearchBox.name} */}
      </div>
    </div>
  );
}

export default Home;
