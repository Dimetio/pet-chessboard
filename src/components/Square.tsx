export default function Square({ black, children }: any) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  
  return (
    <div className="square" style={{ backgroundColor: fill, color: stroke }}>
      {children}
    </div>
  );
}
