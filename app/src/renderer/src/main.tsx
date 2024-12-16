import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import App from "./App";
import { AuthProvider } from "./hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        <Toaster />
        <App />
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>,
);
