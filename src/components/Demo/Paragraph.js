import React from "react";

function Paragraph(props) {
    console.log("Paragraph Running") //Paragraph runs for the first time when App loads then due to React.memo in Demo.js since Demo.js is not re-evaluated its child Paragraph is also not re-evaluated
  return <p>{props.children}</p>;
}

export default Paragraph;
