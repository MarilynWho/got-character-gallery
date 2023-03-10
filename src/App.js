import logo from './logo.svg';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import characters from "./data/characterData.json";

function App() {
  return (
    <div className="App" data-test="component-app">
      <CharacterGallery />
    </div>
  );
}

export default App;
