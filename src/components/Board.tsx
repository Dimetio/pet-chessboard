import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { canMoveKnight, moveKnight } from "../game";
import Knight from "./Knight";
import Square from "./Square";

function hanldeSquareClick(toX: any, toY: any) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

function renderSquare(i: any, [knightX, knightY]: any) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnigthHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const place = isKnigthHere ? <Knight /> : null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        key={i}
        className="square-wrap"
        onClick={() => hanldeSquareClick(x, y)}
      >
        <Square black={black}>{place}</Square>
      </div>
    </DndProvider>
  );
}

export default function Board({ position }: any) {
  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, position));
  }
  return <div className="board">{squares}</div>;
}
