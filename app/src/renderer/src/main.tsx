import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { AuthProvider } from "./hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
