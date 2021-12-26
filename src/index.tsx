import { BrowserRouter } from "react-router-dom";
import ReactDom from "react-dom";
import App from "./App";
import "./styles/remedy.css";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
