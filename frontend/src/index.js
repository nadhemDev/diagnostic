import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./components/Login/login.css";
import "./components/navigation/navigation.css";

import "./components/Login/login.css";
import { Provider } from "react-redux";
import store from "./JS/store/store";
// import "./components/profile/profileUser.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
