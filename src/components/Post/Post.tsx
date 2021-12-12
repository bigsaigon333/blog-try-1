import type { HTMLAttributes } from "react";
import style from "./Post.module.css";

interface PostProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  date: Date;
  minToRead: number;
}

const Post = ({ title, description, date, minToRead, ...rest }: PostProps) => (
  <article className={style.post} {...rest}>
    <h1 className={style.title}>{title}</h1>
    <p className={style.description}>{description}</p>
    <div className={style.extraContainer}>
      <span>{date.toLocaleDateString()}</span>
      <span>{minToRead} min read</span>
    </div>
  </article>
);

export default Post;
