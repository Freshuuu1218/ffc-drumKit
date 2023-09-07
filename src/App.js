import "./App.css";
import DrumPads from "./DrumPads";

function App() {
  const getFinalName = (finalName) => {
    document.getElementById("soundName").innerHTML = finalName;
  };
  return (
    <div id="drum-machine">
      <DrumPads finalName={getFinalName} />
      <span id="soundName"></span>
    </div>
  );
}

export default App;
