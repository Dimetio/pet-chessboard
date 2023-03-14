import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Board position={[0,0]}/>
    </div>
  );
}

export default App;
