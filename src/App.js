import "./App.css";
import PictureCard from "./components/PictureCard";
import characters from "../src/response.json";
import { useState } from "react";

function App() {
  //const filterFor = "";
  const [searchString, setSearchString] = useState("");

  return (
    <div className="App">
      <h1>Rick & Morty Characters</h1>
      <input
        value={searchString}
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      />
      {characters.results
        .filter((character) => {
          return character.name
            .toLowerCase()
            .includes(searchString.toLowerCase());
        })
        .map((character) => (
          <PictureCard key={character.id} character={character} />
        ))}
    </div>
  );
}

export default App;
