import React from "react";

function MyFaves(props) {
  console.log("rendering my faves");
  return (
    <div>
      {props.faves.map((fave) => {
        return <h2>{fave.name}</h2>;
      })}
    </div>
  );
}

export default MyFaves;
