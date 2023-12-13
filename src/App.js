import React from "react";
import "./styles.css";

const Article = ({ uberschrift, platzhalterText }) => {
  return (
    <article>
      <h2 className="article__title">{uberschrift}</h2>
      <label htmlFor="inputText">Write text here: </label>
      <input id="inputText" placeholder={platzhalterText}></input>
      <a href="https://de.wikipedia.org/wiki/">Find info at Wikipedia</a>
    </article>
  );
};

export default function App() {
  return (
    <Article
      uberschrift={"Ich bin die Überschrift"}
      platzhalterText={"Dynamischer Platzhalterin"}
    />
  );
}
