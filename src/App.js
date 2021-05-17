import "./App.css";
import PictureCard from "./components/PictureCard";
//import characters from "../src/response.json";
import { loadCharacters } from "./service/api-service";
import {useEffect, useState} from "react";

function App() {

  const [searchString, setSearchString] = useState("");
  const [characters, setCharacters] = useState([]);
  const[error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() =>{
    loadData(actualPage);
  }, [actualPage]);

  function loadData(page){
    setIsLoading(true);
    loadCharacters(page).then((data) => setCharacters(data.results)).catch((error) => setError(error)).finally(()=>setIsLoading(false));
  }

  /*function loadPage(change){
    if(change === -1 && actualPage ===0){
      loadData(actualPage);
    }
    if(change === 1 && actualPage === 34){
      loadData(actualPage);
    }
    else{
      setActualPage((actualPage + change));
      loadData(actualPage);
    }
  };*/

  return (
    <div className="App">
      <h1>Rick & Morty Characters {actualPage}</h1>
        <div className="control">

          <button onClick={()=> setActualPage(actualPage - 1)}>Prev</button>

          <input
            value={searchString}
            onChange={(event) => {
              setSearchString(event.target.value);
            }}
          />

          <button onClick={()=> setActualPage(actualPage + 1)}>Next</button>

        </div>
      {characters
        .filter((character) => {
          return character.name
            .toLowerCase()
            .includes(searchString.toLowerCase());
        })
        .map((character) => (
          <PictureCard key={character.id} character={character} />
        ))}
      {isLoading && <div>Lädt!</div>}
      {error && <div>Ja weeß ick jetz ooch nich: {error.message}</div>}
    </div>
  );
}

export default App;
