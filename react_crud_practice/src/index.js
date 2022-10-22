import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

// App을 id가 root로 렌더링 해라
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
