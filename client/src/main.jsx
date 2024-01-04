import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContxProvider } from "./Context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContxProvider>
      <App />
    </AuthContxProvider>
  </React.StrictMode>
);
