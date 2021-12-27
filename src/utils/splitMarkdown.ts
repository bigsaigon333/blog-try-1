import throwError from "./throwError";

const SUMMARY_REG_EXP = /^\s*\-\-\-\s*([\s\S]+)\s*\-\-\-/;

const splitMarkdown = (content: string) => {
  const [matched, summary] =
    SUMMARY_REG_EXP.exec(content) ??
    throwError("[splitMarkdown] cannot parse summary");

  const body = content.slice(matched.length).trim();

  return [summary, body];
};

export default splitMarkdown;
