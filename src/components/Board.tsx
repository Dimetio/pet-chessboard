import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { canMoveKnight, moveKnight } from "../game";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

function hanldeSquareClick(toX: any, toY: any) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

function renderSquare(i: any, position: any) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} onClick={() => hanldeSquareClick(x, y)}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, position)}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x: any, y: any, [knightX, knightY]: any) {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}

export default function Board({ position }: any) {
  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, position));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">{squares}</div>
    </DndProvider>
  );
}
