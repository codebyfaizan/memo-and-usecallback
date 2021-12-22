import React from "react";
import "./App.css";
import Demo from "./components/Demo/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = React.useState(false);
  const [allowToggle, setAllowToggle] = React.useState(false);

  console.log("App Running");

  const paragraphToggleHandler = React.useCallback(() => {
    if (allowToggle) {
      setShowParagraph(true); 
    }
  }, [allowToggle]); //Since paragraphToggleHandler forms a closure with allowToggleHandler the previous value of allowToggle gets saved and since we have used useCallback the re-rendering don't happen making the value of allowToggle to never change. Hence, we need an array o dependency which will make React to check if the value allowToggle changed or not

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={paragraphToggleHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
