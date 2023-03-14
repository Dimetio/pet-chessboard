let position = [0, 0];
let observer: any = null;

function emitChange() {
  observer(position);
}

export function observe(o: any) {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX: any, toY: any) {
  position = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX: any, toY: any) {
  const [x, y] = position;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
}
