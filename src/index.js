import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { NoteDataProvider } from "./contexts/NoteData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NoteDataProvider>
      <App />
    </NoteDataProvider>
  </StrictMode>,
  rootElement
);
