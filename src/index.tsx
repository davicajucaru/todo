import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { UserStateProvider } from "./hooks/useTask";

ReactDOM.render(
  <React.StrictMode>
    <UserStateProvider>
      <App />
    </UserStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
