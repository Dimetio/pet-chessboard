import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { moveKnight } from "../game";
import Square from "./Square";

export default function BoardSquare({ x, y, children }: any) {
  const black = (x + y) % 2 === 1;

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(x, y),
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }),
    [x, y]
  );

  return (
    <div className="square-wrap" ref={drop}>
      <Square black={black}>{children}</Square>
      {isOver && <div className="square-yellow"></div>}
    </div>
  );
}
