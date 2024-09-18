import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";
// import { ReactQueryDevtools } from "@tanstack/react-query"
import React from "react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <App />
          {/* <ReactQueryDevtools /> */}
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
)