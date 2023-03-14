import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { canMoveKnight, moveKnight } from "../game";
import Square from "./Square";

export default function BoardSquare({ x, y, children }: any) {
  const black = (x + y) % 2 === 1;

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      canDrop: () => canMoveKnight(x, y),
      drop: () => moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y]
  );

  return (
    <div className="square-wrap" ref={drop}>
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <div className="overlay square-red"></div>}
      {!isOver && canDrop && <div className="overlay square-yellow"></div>}
      {isOver && canDrop && <div className="overlay square-green"></div>}
    </div>
  );
}
