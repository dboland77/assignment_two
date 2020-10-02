import React, { useState } from "react";
import "./App.css";
import CharComponent from "./components/CharComponent";
import ValidationComponent from "./components/ValidationComponent";

function App() {
  const [textState, setTextState] = useState({
    inputText: "",
    textLength: 0,
    charShow: false,
  });

  const handleChange = (event) => {
    setTextState({
      inputText: event.target.value,
      textLength: event.target.value.length,
    });
  };

  const toggleCharComponent = () => {
    const doesShow = textState.charShow;
    setTextState({ charShow: !doesShow });
  };

  const deleteChar = (textIndex) => {
    const currentText = [...textState.inputText];
    const textArray = Array.from(currentText);
    textArray.splice(textIndex, 1);
    setTextState({
      inputText: textArray.join(''),
      textLength: textArray.length,
    });
  };

  return (
    <div className="App">
      <br />
      <br />
      <input type="text" onChange={handleChange} value={textState.inputText}/>
      <p>{textState.inputText}</p>
      <ValidationComponent textlength={textState.textLength} />
      {Array.from(textState.inputText).map((char, index) => {
        return (
          <CharComponent
            char={char}
            key={index}
            click={() => deleteChar(index)}
            onClick={toggleCharComponent}
          />
        );
      })}
    </div>
  );
}

export default App;
