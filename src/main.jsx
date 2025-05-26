import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="flex flex-col max-w-2xl mx-auto mt-20">
        <h2>Конвертер валют</h2>
        <App />
      </div>
    </Provider>
  </StrictMode>
);
