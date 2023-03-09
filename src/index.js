import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import styled from "styled-components";
import { ModalProvider } from "styled-react-modal";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
        <App />
    </ModalProvider>
  </React.StrictMode>
);


