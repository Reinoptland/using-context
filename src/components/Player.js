import React from "react";
import DeleteBTN from "./DeleteBTN";
import NewPlayer from "./NewPlayer";

export default function Player(props) {
  //   console.log("WHAT ARE THE PROPS?", props);
  return (
    <div>
      {props.name} - {props.score}
      <DeleteBTN id={props.id} />
    </div>
  );
}
