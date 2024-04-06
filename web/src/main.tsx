import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RootNavigation from "./services/routes/RootNavigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootNavigation />
    </BrowserRouter>
  </React.StrictMode>
);
