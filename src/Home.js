import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Home() {
  console.log("rendering home");
  return (
    <div className="Home">
      <h1 className="words">Find Your Venue</h1>
      <br />
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Search by City
            <br />
          </Label>
          <Input type="text" name="city" id="exampleEmail" placeholder="" />
        </FormGroup>
        <Button>Let's Go</Button>
      </Form>
    </div>
  );
}

export default Home;
