import type { HTMLAttributes } from "react";
import style from "./PostSummary.module.css";

interface PostSummaryProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  createdAt: Date;
  minToRead: number;
}

const PostSummary = ({
  title,
  description,
  createdAt,
  minToRead,
  ...rest
}: PostSummaryProps) => (
  <article className={style.post} {...rest}>
    <h1 className={style.title}>{title}</h1>
    <p className={style.description}>{description}</p>
    <div className={style.extraContainer}>
      <span>{createdAt.toLocaleDateString()}</span>
      <span>{minToRead} min read</span>
    </div>
  </article>
);

export default PostSummary;
