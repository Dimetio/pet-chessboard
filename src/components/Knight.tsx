import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="figure"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      ♘
    </div>
  );
}
