import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(Entri) {
  return (
    <Entry
      key="Entri.id"
      emoji={Entri.emoji}
      name={Entri.name}
      meaning={Entri.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
