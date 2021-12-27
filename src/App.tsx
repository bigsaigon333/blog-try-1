import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PostSummary from "./components/PostSummary/PostSummary";

interface MdSummary {
  title: string;
  description: string;
  date: Date;
  minToRead: number;
}

interface AppProps {
  mds: Array<{ route: string } & MdSummary>;
}

const App = ({ mds }: AppProps) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={mds.map(({ route, ...rest }) => (
            <Link key={route} to={route}>
              <PostSummary {...rest} />
            </Link>
          ))}
        />
        {mds.map(({ route }) => (
          <Route key={route} path={route} element={<p>{route} Post</p>} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
