import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(<App />);
