import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchMarkdown } from "../../utils/api";
import splitMarkdown from "../../utils/splitMarkdown";

interface PostProps {
  route: string;
}

const Post = ({ route }: PostProps) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetchMarkdown(route)
      .then(splitMarkdown)
      .then(([, body]) => setMarkdown(body));
  }, [route, setMarkdown]);

  return (
    <section>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );
};

export default Post;
