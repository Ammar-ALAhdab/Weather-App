import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// This A New Way To Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// This A Tradtional Way To Render
// ReactDOM.render(<App /> , document.getElementById("root"));