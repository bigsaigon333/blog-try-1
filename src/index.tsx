import { BrowserRouter } from "react-router-dom";
import ReactDom from "react-dom";
import App from "./App";
import "./styles/remedy.css";

const mdSuper = {
  title: "super",
  description:
    "super 는 현재 객체의 프로토타입 객체를 가리키는 포인터이며, Object.getPrototypeOf(this)의 값과 동일하다.간결한 메서드 안에서 super 참조를 사용하여 프로토타입 객체 내 어떤 메서드든 호출할 수 있다. super 참조를 사용하여 프로",
  date: new Date("2021.11.12"),
  minToRead: 3,
};

const mdJsx = {
  title: "JSX란?",
  description:
    "JavaScript Syntax Extension 의 줄임말으로, React에서 UI가 어떻게 생겼는지를 나타내기 위해 사용되는 문법입니다.",
  date: new Date("2021.12.22"),
  minToRead: 1,
};

const mds = [
  { route: "super", ...mdSuper },
  { route: "jsx", ...mdJsx },
];

ReactDom.render(
  <BrowserRouter>
    <App mds={mds} />
  </BrowserRouter>,
  document.getElementById("root")
);
