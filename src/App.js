import './App.css';
import PictureCard from './components/PictureCard';
import characters from '../src/response.json';



function App() {

    const filterFor = "Morty";

    return (
        <div className="App">
            <h1>Rick & Morty Characters</h1>
            {characters.results.filter((character)=> {return character.name.toLowerCase().includes(filterFor.toLowerCase())}).map((character)=> <PictureCard key={character.id} character={(character)}/>)}
        </div>
    );
}

export default App;
