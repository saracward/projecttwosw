import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Home(props) {
  console.log("rendering home");
  const input = React.useRef(null);
  const handleClick = () => {
    console.log(input.current.value);
    props.newLocale(input.current.value);
    props.history.push("/allVenues");
    input.current.value = "";
  };
  // const SearchBox = (props) => {
  //   return (
  //     <input
  //       type="search"
  //       className="search"
  //       placeholder={props.placeholder}
  //       onChange={props.handleChange}
  //     />
  //   );

  return (
    <div className="Home">
      <div className="words">
        <h1>Find Your Venue</h1>
        <br />
        <FormGroup>
          <Label for="citySearch"></Label>
          <Input
            type="text"
            name="citySearch"
            id="citySearch"
            placeholder="Enter Your City"
            // innerRef={input}
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
