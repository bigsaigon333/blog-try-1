import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchMarkdown } from "../../utils/api";

interface PostProps {
  route: string;
}

const Post = ({ route }: PostProps) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchMarkdown(route).then(setContent);
  }, [route, setContent]);

  return (
    <section>
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
};

export default Post;
