import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RootNavigation from "./services/routes/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./services/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootNavigation />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
