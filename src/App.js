import "./App.css";
import PictureCard from "./components/PictureCard";
//import characters from "../src/response.json";
import { loadCharacters } from "./service/api-service";
import { useState } from "react";

function App() {

  const [searchString, setSearchString] = useState("");
  const [characters, setCharacters] = useState({
    results: []
  });

  function loadData(){
      loadCharacters().then((data) => setCharacters(data));
  }

  return (
    <div className="App">
      <h1>Rick & Morty Characters</h1>
        <div className="control">
          <input
            value={searchString}
            onChange={(event) => {
              setSearchString(event.target.value);
            }}
          />

          <button onClick={() => loadData()}>Load Characters</button>
        </div>
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
