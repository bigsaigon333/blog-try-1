import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";

const post = {
  title: "super",
  description:
    "super 는 현재 객체의 프로토타입 객체를 가리키는 포인터이며, Object.getPrototypeOf(this)의 값과 동일하다.간결한 메서드 안에서 super 참조를 사용하여 프로토타입 객체 내 어떤 메서드든 호출할 수 있다. super 참조를 사용하여 프로",
  date: new Date("2021.11.12"),
  minToRead: 3,
};

const App = () => {
  return (
    <div>
      <Header />
      <Link to="/super">
        <Post {...post} />
      </Link>
      <Link to="/jsx">
        <Post {...post} title="jsx" />
      </Link>
      <Routes>
        <Route path={"super"} element={<Post {...post} />} />
        <Route path={"jsx"} element={<Post {...post} title="jsx" />} />
      </Routes>
    </div>
  );
};

export default App;
