import ReactDom from "react-dom";
import Post from "./components/Post/Post";
import "./styles/remedy.css";

const post = {
  title: "super",
  description:
    "super 는 현재 객체의 프로토타입 객체를 가리키는 포인터이며, Object.getPrototypeOf(this)의 값과 동일하다.간결한 메서드 안에서 super 참조를 사용하여 프로토타입 객체 내 어떤 메서드든 호출할 수 있다. super 참조를 사용하여 프로",
  date: new Date("2021.11.12"),
  minToRead: 3,
};

ReactDom.render(<Post {...post} />, document.getElementById("root"));
