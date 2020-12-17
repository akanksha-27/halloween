import React, { useState } from "react";
import "./styles.css";

//database
const Emojis = {
  "😨": "Scared",
  "💀": "Skull",
  "👻": "Ghost",
  "🎃": "jack-o-lantern",
  "👹": "Orge",
  "👺": "Goblin"
};

//converts object into array
var emojisWeKnow = Object.keys(Emojis);

export default function App() {
  const [meaning, setMeaning] = useState("");

  //fucntion for clicking emojis
  function emojiClickHandler(emoji) {
    var meaning = Emojis[emoji];
    setMeaning(meaning); //output
  }

  //function for emoji input by user
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = Emojis[userInput];

    //output
    if (meaning === undefined) {
      meaning = "This emoji is not available, please try some other emoji!";
    }
    setMeaning(meaning);
  }

  //view
  return (
    <div className="App">
      {/* heading */}
      <h1>Halloween!</h1>

      {/* input text box */}
      <input onChange={inputHandler} id="inputBox"></input>

      {/* actual output set by react using useState */}
      <h2>{meaning}</h2>

      <h3>Emojis:</h3>

      {/* show emojis */}
      <ul>
        {emojisWeKnow.map(function (emoji) {
          return (
            <li
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              class="emoji-list"
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
