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
