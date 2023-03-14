import "./App.css";
import Board from "./components/Board";

function App({ position }: any) {
  return (
    <div className="App">
      <Board position={position} />
    </div>
  );
}

export default App;
