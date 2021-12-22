import React from "react";
import Paragraph from "./Paragraph";

function Demo(props) {
  console.log("Demo Running") //Demo.js runs for the first time when App loads but is not re-evaluated afterwards due to React.memo in Demo.js. Also its child Paragraph.js is also not re-evaluated
  return <Paragraph>{props.show ? "This is something new" : ""}</Paragraph>;
}

export default React.memo(Demo);
