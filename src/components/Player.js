import React from "react";
import NewPlayer from "./NewPlayer";

export default function Player(props) {
  return (
    <div>
      {props.name} - {props.score}
    </div>
  );
}
