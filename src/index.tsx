import { BrowserRouter } from "react-router-dom";
import ReactDom from "react-dom";
import App from "./App";
import "./styles/remedy.css";

const mds = [
  { route: "super", content: "super-content" },
  { route: "jsx", content: "jsx-content" },
];

ReactDom.render(
  <BrowserRouter>
    <App mds={mds} />
  </BrowserRouter>,
  document.getElementById("root")
);
