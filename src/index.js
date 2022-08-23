import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./components/Welcome.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </header>
    </div>
  </React.StrictMode>
);

reportWebVitals();
