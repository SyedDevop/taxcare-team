import React from "react";
import ReactDOM from "react-dom/client";

import "./core-ui/style.scss";
import App from "./App.tsx";
import { AuthProvider } from "./Hooks/useAuth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
