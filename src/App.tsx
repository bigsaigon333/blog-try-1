import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PostSummary from "./components/PostSummary/PostSummary";

const post = {
  title: "super",
  description:
    "super 는 현재 객체의 프로토타입 객체를 가리키는 포인터이며, Object.getPrototypeOf(this)의 값과 동일하다.간결한 메서드 안에서 super 참조를 사용하여 프로토타입 객체 내 어떤 메서드든 호출할 수 있다. super 참조를 사용하여 프로",
  date: new Date("2021.11.12"),
  minToRead: 3,
};

interface AppProps {
  mds: { route: string; content: string }[];
}

const App = ({ mds }: AppProps) => {
  return (
    <div>
      <Routes>
        <Header />
        <Route
          path="/"
          element={mds.map(({ route }) => (
            <Link key={route} to={route}>
              <PostSummary {...post} />
            </Link>
          ))}
        />
        {mds.map(({ route }) => (
          <Route key={route} path={route} element={<PostSummary {...post} />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
