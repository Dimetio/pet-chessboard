import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function observe(receive: any): any {
  const randPos = () => Math.floor(Math.random() * 8);
  setInterval(() => receive([randPos(), randPos()]), 500);
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
observe((position: any) =>
  root.render(
    <React.StrictMode>
      <App position={position} />
    </React.StrictMode>
  )
);
reportWebVitals();
